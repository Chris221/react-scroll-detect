'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

var React = require('react');

function _interopDefaultLegacy (e) { return e && typeof e === 'object' && 'default' in e ? e : { 'default': e }; }

var React__default = /*#__PURE__*/_interopDefaultLegacy(React);

/******************************************************************************
Copyright (c) Microsoft Corporation.

Permission to use, copy, modify, and/or distribute this software for any
purpose with or without fee is hereby granted.

THE SOFTWARE IS PROVIDED "AS IS" AND THE AUTHOR DISCLAIMS ALL WARRANTIES WITH
REGARD TO THIS SOFTWARE INCLUDING ALL IMPLIED WARRANTIES OF MERCHANTABILITY
AND FITNESS. IN NO EVENT SHALL THE AUTHOR BE LIABLE FOR ANY SPECIAL, DIRECT,
INDIRECT, OR CONSEQUENTIAL DAMAGES OR ANY DAMAGES WHATSOEVER RESULTING FROM
LOSS OF USE, DATA OR PROFITS, WHETHER IN AN ACTION OF CONTRACT, NEGLIGENCE OR
OTHER TORTIOUS ACTION, ARISING OUT OF OR IN CONNECTION WITH THE USE OR
PERFORMANCE OF THIS SOFTWARE.
***************************************************************************** */

var __assign = function() {
    __assign = Object.assign || function __assign(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p)) t[p] = s[p];
        }
        return t;
    };
    return __assign.apply(this, arguments);
};

/** @deprecated */
function __spreadArrays() {
    for (var s = 0, i = 0, il = arguments.length; i < il; i++) s += arguments[i].length;
    for (var r = Array(s), k = 0, i = 0; i < il; i++)
        for (var a = arguments[i], j = 0, jl = a.length; j < jl; j++, k++)
            r[k] = a[j];
    return r;
}

var ReactScrollDetectContext = React.createContext({
    onChange: function (_) { },
    addSection: function (_) { },
    sections: [],
    index: 0,
    triggerPoint: 'center',
    offset: 0
});

var ReactScrollDetect = function (props) {
    var _a = props.onChange, onChange = _a === void 0 ? function () { } : _a, _b = props.index, index = _b === void 0 ? 0 : _b, _c = props.triggerPoint, triggerPoint = _c === void 0 ? 'center' : _c, _d = props.offset, offset = _d === void 0 ? 0 : _d;
    var _e = React.useState([]), sections = _e[0], setSections = _e[1];
    var numSections = 0;
    var addSection = function (section) {
        setSections(function (sections) { return __spreadArrays(sections, [__assign(__assign({}, section), { index: numSections++ })]); });
    };
    var providerValue = {
        onChange: onChange,
        addSection: addSection,
        sections: sections,
        index: index,
        triggerPoint: triggerPoint,
        offset: offset
    };
    return (React__default["default"].createElement(ReactScrollDetectContext.Provider, { value: providerValue },
        React__default["default"].createElement(_ScrollContainer, null, props.children)));
};
var WINDOW_HEIGHT = window.innerHeight;
var _ScrollContainer = function (props) {
    var _a = React.useContext(ReactScrollDetectContext), sections = _a.sections, onChange = _a.onChange, index = _a.index, triggerPoint = _a.triggerPoint, _b = _a.offset, offset = _b === void 0 ? 0 : _b;
    var _c = React.useState([]), sectionEntryPoints = _c[0], setSectionEntryPoints = _c[1];
    var _d = React.useState(0), currentIndex = _d[0], setCurrentIndex = _d[1];
    var TRIGGER_CONST = triggerPoint === 'center' ? WINDOW_HEIGHT / 2 : triggerPoint === 'top' ? 0 : WINDOW_HEIGHT;
    React.useEffect(function () {
        initializeEntryPoints();
    }, [sections]);
    React.useEffect(function () {
        if (index !== currentIndex) {
            setCurrentIndex(index);
            onChange(index);
        }
        window.scrollTo({ top: (sectionEntryPoints[index] || 0) - offset, behavior: 'smooth' });
    }, [index]);
    var initializeEntryPoints = function () {
        var _sectionEntryPoints = [];
        if (sections.length === 0)
            return;
        // console.log("first section height", sections[0].ref.offsetTop, sections[0].ref)
        var prev = sections[0].ref.offsetTop;
        sections.forEach(function (section) {
            _sectionEntryPoints.push(prev);
            prev = prev + section.height;
        });
        setSectionEntryPoints(_sectionEntryPoints);
    };
    var findIndex = function (posTop) {
        var _index = 0;
        sectionEntryPoints.forEach(function (p, i) {
            if (posTop > p && posTop < (sectionEntryPoints[i + 1] || 99999))
                _index = i;
        });
        return _index;
    };
    var onWheel = function (e) {
        var top = (e.pageY - e.clientY) + (TRIGGER_CONST);
        var newIndex = findIndex(top);
        if (newIndex !== currentIndex) {
            setCurrentIndex(newIndex);
            onChange(newIndex);
        }
    };
    return (React__default["default"].createElement("div", { onWheel: onWheel }, props.children));
};

var DetectSection = function (props) {
    var ref = React.useRef(null);
    var addSection = React.useContext(ReactScrollDetectContext).addSection;
    React.useEffect(function () {
        if (!ref.current)
            return;
        var height = ref.current.clientHeight || 0;
        addSection({ height: height, ref: ref.current });
    }, [ref]);
    return (React__default["default"].createElement("div", { ref: ref }, props.children));
};

exports.DetectSection = DetectSection;
exports["default"] = ReactScrollDetect;
//# sourceMappingURL=index.js.map
