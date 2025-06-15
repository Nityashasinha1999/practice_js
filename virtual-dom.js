class VNode {
    constructor(type, props = {}, children = []) {
        this.type = type;
        this.props = props;
        this.children = children;
        this.eventListeners = new Map();
    }
}

class CustomEventEmitter {
    constructor() {
        this.listeners = new Map();
    }

    on(eventName, callback) {
        if (!this.listeners.has(eventName)) {
            this.listeners.set(eventName, new Set());
        }
        this.listeners.get(eventName).add(callback);
    }

    off(eventName, callback) {
        if (this.listeners.has(eventName)) {
            this.listeners.get(eventName).delete(callback);
        }
    }

    emit(eventName, data) {
        if (this.listeners.has(eventName)) {
            this.listeners.get(eventName).forEach(callback => callback(data));
        }
    }
}

class VirtualDOM {
    constructor() {
        this.eventEmitter = new CustomEventEmitter();
    }

    createElement(type, props, ...children) {
        return new VNode(type, props, children.flat());
    }

    render(vNode, container) {
        const domNode = document.createElement(vNode.type);
        
        // Apply properties
        Object.entries(vNode.props || {}).forEach(([key, value]) => {
            if (key.startsWith('on') && key.toLowerCase() === 'oncustomclick') {
                // Handle our custom click event
                domNode.addEventListener('click', (e) => {
                    this.eventEmitter.emit('customClick', { 
                        target: domNode,
                        originalEvent: e,
                        timestamp: Date.now()
                    });
                    if (typeof value === 'function') {
                        value(e);
                    }
                });
            } else if (key.startsWith('on')) {
                domNode.addEventListener(key.slice(2).toLowerCase(), value);
            } else {
                domNode.setAttribute(key, value);
            }
        });

        vNode.children.forEach(child => {
            if (typeof child === 'string') {
                domNode.appendChild(document.createTextNode(child));
            } else {
                this.render(child, domNode);
            }
        });

        container.appendChild(domNode);
        return domNode;
    }
    addCustomEventListener(eventName, callback) {
        this.eventEmitter.on(eventName, callback);
    }

    removeCustomEventListener(eventName, callback) {
        this.eventEmitter.off(eventName, callback);
    }
}

const vdom = new VirtualDOM();

const vTree = vdom.createElement(
    'div',
    { class: 'container', id: 'main' },
    vdom.createElement(
        'button',
        { 
            oncustomclick: (e) => console.log('Button clicked!', e),
            class: 'btn'
        },
        'Click Me'
    )
);

const container = document.getElementById('root');
vdom.render(vTree, container);

vdom.addCustomEventListener('customClick', (data) => {
    console.log('Custom click event triggered:', {
        target: data.target,
        timestamp: new Date(data.timestamp).toLocaleString()
    });
});