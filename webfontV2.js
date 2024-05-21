(function() {
    function createElement(tag, attrs, text) {
        var element = document.createElement(tag);
        if (attrs) {
            for (var key in attrs) {
                if (attrs.hasOwnProperty(key)) {
                    if (key === 'style') {
                        element.style.cssText = attrs[key];
                    } else {
                        element.setAttribute(key, attrs[key]);
                    }
                }
            }
        }
        if (text) {
            element.appendChild(document.createTextNode(text));
        }
        return element;
    }

    function insertElement(parent, tag, attrs, text) {
        var element = createElement(tag, attrs, text);
        parent.appendChild(element);
    }

    function removeElement(element) {
        if (element.parentNode) {
            element.parentNode.removeChild(element);
        }
    }

    function toggleClass(element, addClasses, removeClasses) {
        var classes = element.className.split(/\s+/);
        addClasses.forEach(function(cls) {
            if (!classes.includes(cls)) {
                classes.push(cls);
            }
        });
        removeClasses.forEach(function(cls) {
            var index = classes.indexOf(cls);
            if (index !== -1) {
                classes.splice(index, 1);
            }
        });
        element.className = classes.join(' ');
    }

    function loadFont(fontName, weight) {
        var link = createElement('link', {
            rel: 'stylesheet',
            href: 'https://fonts.googleapis.com/css?family=' + fontName + ':' + weight,
            media: 'all'
        });
        document.head.appendChild(link);
    }

    // Usage
    insertElement(document.body, 'div', { id: 'test-div', style: 'color: red;' }, 'Hello World!');
    toggleClass(document.body, ['wf-loading'], []);
    loadFont('Roboto', '400');
})();
