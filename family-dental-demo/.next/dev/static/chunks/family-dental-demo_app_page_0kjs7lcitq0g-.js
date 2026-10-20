(globalThis["TURBOPACK"] || (globalThis["TURBOPACK"] = [])).push([typeof document === "object" ? document.currentScript : undefined,
"[project]/family-dental-demo/app/page.js [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>Home
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$family$2d$dental$2d$demo$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/family-dental-demo/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$family$2d$dental$2d$demo$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/family-dental-demo/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
;
var _s = __turbopack_context__.k.signature(), _s1 = __turbopack_context__.k.signature();
'use client';
;
const MAP = 'https://maps.app.goo.gl/P7CC4EacYpLexbNC8';
const PHONE = 'tel:+923203771995';
const ADDRESS = 'Allama Iqbal Road, opposite City Book Depot, above National Bank of Pakistan, New Mirpur City, AJK, Pakistan.';
// Editable demonstration categories; the clinic must confirm availability.
const treatments = [
    [
        'General Dental Check-ups',
        'A conversation about your oral health and the questions on your mind.',
        'tooth'
    ],
    [
        'Teeth Cleaning and Scaling',
        'Ask about professional cleaning and everyday care for your smile.',
        'spark'
    ],
    [
        'Tooth Fillings',
        'Discuss options for looking after a tooth affected by decay or damage.',
        'tooth'
    ],
    [
        'Root Canal Treatment',
        'Understand whether root canal care may be appropriate for your needs.',
        'plus'
    ],
    [
        'Gum Care',
        'Talk through gum concerns and ways to support your oral hygiene.',
        'leaf'
    ],
    [
        "Children’s Dental Care",
        'Explore a thoughtful introduction to dental visits for little smiles.',
        'heart'
    ],
    [
        'Cosmetic Dentistry',
        'A starting point for discussing the changes you would like to explore.',
        'spark'
    ],
    [
        'Dental Consultation',
        'Space to ask questions and understand possible next steps.',
        'chat'
    ]
];
const photos = {
    hero: '/images/pakistani-hero.webp',
    room: '/images/pakistani-room.webp',
    care: '/images/pakistani-care.webp',
    visit: '/images/pakistani-visit.webp'
};
function Icon({ name = 'tooth', className = '' }) {
    const paths = {
        tooth: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$family$2d$dental$2d$demo$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
            d: "M12 5C8 2 3 4 4 10c.5 3 2 10 4 10 2 0 1-7 4-7s2 7 4 7c2 0 3.5-7 4-10 1-6-4-8-8-5Zm0 0 3 1"
        }, void 0, false, {
            fileName: "[project]/family-dental-demo/app/page.js",
            lineNumber: 28,
            columnNumber: 12
        }, this),
        arrow: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$family$2d$dental$2d$demo$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
            d: "M4 12h15m-6-6 6 6-6 6"
        }, void 0, false, {
            fileName: "[project]/family-dental-demo/app/page.js",
            lineNumber: 29,
            columnNumber: 12
        }, this),
        pin: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$family$2d$dental$2d$demo$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$family$2d$dental$2d$demo$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Fragment"], {
            children: [
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$family$2d$dental$2d$demo$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                    d: "M19 10c0 5-7 11-7 11S5 15 5 10a7 7 0 1 1 14 0Z"
                }, void 0, false, {
                    fileName: "[project]/family-dental-demo/app/page.js",
                    lineNumber: 30,
                    columnNumber: 12
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$family$2d$dental$2d$demo$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("circle", {
                    cx: "12",
                    cy: "10",
                    r: "2"
                }, void 0, false, {
                    fileName: "[project]/family-dental-demo/app/page.js",
                    lineNumber: 30,
                    columnNumber: 71
                }, this)
            ]
        }, void 0, true, {
            fileName: "[project]/family-dental-demo/app/page.js",
            lineNumber: 30,
            columnNumber: 10
        }, this),
        heart: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$family$2d$dental$2d$demo$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
            d: "m12 20-8-8C-2 5 7 0 12 7c5-7 14-2 8 5Z"
        }, void 0, false, {
            fileName: "[project]/family-dental-demo/app/page.js",
            lineNumber: 31,
            columnNumber: 12
        }, this),
        spark: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$family$2d$dental$2d$demo$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$family$2d$dental$2d$demo$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Fragment"], {
            children: [
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$family$2d$dental$2d$demo$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                    d: "m12 3 2.5 6.5L21 12l-6.5 2.5L12 21l-2.5-6.5L3 12l6.5-2.5Z"
                }, void 0, false, {
                    fileName: "[project]/family-dental-demo/app/page.js",
                    lineNumber: 32,
                    columnNumber: 14
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$family$2d$dental$2d$demo$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                    d: "M20 2v4m-2-2h4"
                }, void 0, false, {
                    fileName: "[project]/family-dental-demo/app/page.js",
                    lineNumber: 32,
                    columnNumber: 84
                }, this)
            ]
        }, void 0, true, {
            fileName: "[project]/family-dental-demo/app/page.js",
            lineNumber: 32,
            columnNumber: 12
        }, this),
        plus: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$family$2d$dental$2d$demo$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$family$2d$dental$2d$demo$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Fragment"], {
            children: [
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$family$2d$dental$2d$demo$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("rect", {
                    x: "4",
                    y: "4",
                    width: "16",
                    height: "16",
                    rx: "5"
                }, void 0, false, {
                    fileName: "[project]/family-dental-demo/app/page.js",
                    lineNumber: 33,
                    columnNumber: 13
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$family$2d$dental$2d$demo$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                    d: "M12 8v8m-4-4h8"
                }, void 0, false, {
                    fileName: "[project]/family-dental-demo/app/page.js",
                    lineNumber: 33,
                    columnNumber: 63
                }, this)
            ]
        }, void 0, true, {
            fileName: "[project]/family-dental-demo/app/page.js",
            lineNumber: 33,
            columnNumber: 11
        }, this),
        leaf: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$family$2d$dental$2d$demo$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$family$2d$dental$2d$demo$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Fragment"], {
            children: [
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$family$2d$dental$2d$demo$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                    d: "M20 4C6 2 2 9 6 16s16 3 14-12Z"
                }, void 0, false, {
                    fileName: "[project]/family-dental-demo/app/page.js",
                    lineNumber: 34,
                    columnNumber: 13
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$family$2d$dental$2d$demo$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                    d: "m4 21 11-12"
                }, void 0, false, {
                    fileName: "[project]/family-dental-demo/app/page.js",
                    lineNumber: 34,
                    columnNumber: 56
                }, this)
            ]
        }, void 0, true, {
            fileName: "[project]/family-dental-demo/app/page.js",
            lineNumber: 34,
            columnNumber: 11
        }, this),
        chat: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$family$2d$dental$2d$demo$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$family$2d$dental$2d$demo$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Fragment"], {
            children: [
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$family$2d$dental$2d$demo$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                    d: "M20 11a8 8 0 0 1-8 8H5l-3 3V11a9 9 0 0 1 18 0Z"
                }, void 0, false, {
                    fileName: "[project]/family-dental-demo/app/page.js",
                    lineNumber: 35,
                    columnNumber: 13
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$family$2d$dental$2d$demo$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                    d: "M7 10h8m-8 4h5"
                }, void 0, false, {
                    fileName: "[project]/family-dental-demo/app/page.js",
                    lineNumber: 35,
                    columnNumber: 72
                }, this)
            ]
        }, void 0, true, {
            fileName: "[project]/family-dental-demo/app/page.js",
            lineNumber: 35,
            columnNumber: 11
        }, this),
        phone: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$family$2d$dental$2d$demo$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
            d: "m7 3 3 5-3 3c2 3 3 4 6 6l3-3 5 3-2 4C10 22 2 14 3 5Z"
        }, void 0, false, {
            fileName: "[project]/family-dental-demo/app/page.js",
            lineNumber: 36,
            columnNumber: 12
        }, this)
    };
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$family$2d$dental$2d$demo$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("svg", {
        className: className,
        width: "24",
        height: "24",
        viewBox: "0 0 24 24",
        fill: "none",
        stroke: "currentColor",
        strokeWidth: "1.5",
        strokeLinecap: "round",
        strokeLinejoin: "round",
        "aria-hidden": "true",
        children: paths[name] || paths.tooth
    }, void 0, false, {
        fileName: "[project]/family-dental-demo/app/page.js",
        lineNumber: 38,
        columnNumber: 10
    }, this);
}
_c = Icon;
function Brand() {
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$family$2d$dental$2d$demo$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("a", {
        className: "brand",
        href: "#home",
        "aria-label": "Family Dental Clinic home",
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$family$2d$dental$2d$demo$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                className: "brand-icon",
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$family$2d$dental$2d$demo$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(Icon, {}, void 0, false, {
                    fileName: "[project]/family-dental-demo/app/page.js",
                    lineNumber: 42,
                    columnNumber: 112
                }, this)
            }, void 0, false, {
                fileName: "[project]/family-dental-demo/app/page.js",
                lineNumber: 42,
                columnNumber: 83
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$family$2d$dental$2d$demo$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                children: [
                    "family dental",
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$family$2d$dental$2d$demo$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                        className: "brand-sub",
                        children: "CLINIC · MIRPUR"
                    }, void 0, false, {
                        fileName: "[project]/family-dental-demo/app/page.js",
                        lineNumber: 42,
                        columnNumber: 146
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/family-dental-demo/app/page.js",
                lineNumber: 42,
                columnNumber: 127
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/family-dental-demo/app/page.js",
        lineNumber: 42,
        columnNumber: 10
    }, this);
}
_c1 = Brand;
function Photo({ src, alt, className = '', priority = false }) {
    _s();
    const [failed, setFailed] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$family$2d$dental$2d$demo$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(false);
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$family$2d$dental$2d$demo$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: `photo ${className}`,
        children: failed ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$family$2d$dental$2d$demo$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "photo-fallback",
            children: [
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$family$2d$dental$2d$demo$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(Icon, {}, void 0, false, {
                    fileName: "[project]/family-dental-demo/app/page.js",
                    lineNumber: 48,
                    columnNumber: 47
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$family$2d$dental$2d$demo$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                    children: "Care begins with a conversation."
                }, void 0, false, {
                    fileName: "[project]/family-dental-demo/app/page.js",
                    lineNumber: 48,
                    columnNumber: 55
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$family$2d$dental$2d$demo$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("small", {
                    children: "Concept photograph unavailable"
                }, void 0, false, {
                    fileName: "[project]/family-dental-demo/app/page.js",
                    lineNumber: 48,
                    columnNumber: 100
                }, this)
            ]
        }, void 0, true, {
            fileName: "[project]/family-dental-demo/app/page.js",
            lineNumber: 48,
            columnNumber: 15
        }, this) : /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$family$2d$dental$2d$demo$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("img", {
            src: src,
            alt: alt,
            loading: priority ? 'eager' : 'lazy',
            fetchPriority: priority ? 'high' : 'auto',
            decoding: "async",
            onError: ()=>setFailed(true)
        }, void 0, false, {
            fileName: "[project]/family-dental-demo/app/page.js",
            lineNumber: 48,
            columnNumber: 154
        }, this)
    }, void 0, false, {
        fileName: "[project]/family-dental-demo/app/page.js",
        lineNumber: 47,
        columnNumber: 10
    }, this);
}
_s(Photo, "BFa/7w0IiJnSoWJxZHxuU4kOwF4=");
_c2 = Photo;
function Home() {
    _s1();
    const [menu, setMenu] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$family$2d$dental$2d$demo$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(false);
    const [topic, setTopic] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$family$2d$dental$2d$demo$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])('Dental Consultation');
    const dialog = (0, __TURBOPACK__imported__module__$5b$project$5d2f$family$2d$dental$2d$demo$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"])(null);
    const menuButton = (0, __TURBOPACK__imported__module__$5b$project$5d2f$family$2d$dental$2d$demo$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"])(null);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$family$2d$dental$2d$demo$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "Home.useEffect": ()=>{
            if (!('IntersectionObserver' in window) || window.matchMedia('(prefers-reduced-motion: reduce)').matches) return;
            const observer = new IntersectionObserver({
                "Home.useEffect": (entries)=>entries.forEach({
                        "Home.useEffect": (entry)=>{
                            if (entry.isIntersecting) {
                                entry.target.classList.add('revealed');
                                observer.unobserve(entry.target);
                            }
                        }
                    }["Home.useEffect"])
            }["Home.useEffect"], {
                threshold: 0.08
            });
            const nodes = document.querySelectorAll('[data-reveal], .treatment, .steps article, .gallery figure, .trust-item');
            nodes.forEach({
                "Home.useEffect": (node)=>{
                    node.classList.add('reveal-ready');
                    observer.observe(node);
                }
            }["Home.useEffect"]);
            return ({
                "Home.useEffect": ()=>observer.disconnect()
            })["Home.useEffect"];
        }
    }["Home.useEffect"], []);
    function inquire(value = 'Dental Consultation') {
        setTopic(value);
        setMenu(false);
        dialog.current?.showModal();
    }
    const links = [
        [
            'Home',
            'home'
        ],
        [
            'About',
            'about'
        ],
        [
            'Treatments',
            'treatments'
        ],
        [
            'Patient Care',
            'patient-care'
        ],
        [
            'FAQs',
            'faq'
        ],
        [
            'Contact',
            'contact'
        ]
    ];
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$family$2d$dental$2d$demo$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$family$2d$dental$2d$demo$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Fragment"], {
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$family$2d$dental$2d$demo$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("a", {
                href: "#main",
                className: "skip-link",
                children: "Skip to content"
            }, void 0, false, {
                fileName: "[project]/family-dental-demo/app/page.js",
                lineNumber: 69,
                columnNumber: 5
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$family$2d$dental$2d$demo$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "topbar",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$family$2d$dental$2d$demo$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                        children: "A little care. A lot to smile about."
                    }, void 0, false, {
                        fileName: "[project]/family-dental-demo/app/page.js",
                        lineNumber: 70,
                        columnNumber: 29
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$family$2d$dental$2d$demo$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("a", {
                        href: PHONE,
                        children: [
                            "Mirpur, AJK ",
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$family$2d$dental$2d$demo$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                className: "top-divider",
                                children: "/"
                            }, void 0, false, {
                                fileName: "[project]/family-dental-demo/app/page.js",
                                lineNumber: 70,
                                columnNumber: 106
                            }, this),
                            " +92 320 3771995"
                        ]
                    }, void 0, true, {
                        fileName: "[project]/family-dental-demo/app/page.js",
                        lineNumber: 70,
                        columnNumber: 78
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/family-dental-demo/app/page.js",
                lineNumber: 70,
                columnNumber: 5
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$family$2d$dental$2d$demo$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("header", {
                className: "header",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$family$2d$dental$2d$demo$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "reading-progress",
                        "aria-hidden": "true"
                    }, void 0, false, {
                        fileName: "[project]/family-dental-demo/app/page.js",
                        lineNumber: 71,
                        columnNumber: 32
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$family$2d$dental$2d$demo$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "nav-wrap",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$family$2d$dental$2d$demo$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(Brand, {}, void 0, false, {
                                fileName: "[project]/family-dental-demo/app/page.js",
                                lineNumber: 72,
                                columnNumber: 33
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$family$2d$dental$2d$demo$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("nav", {
                                className: "desktop-nav",
                                "aria-label": "Main navigation",
                                children: links.map(([label, id])=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$family$2d$dental$2d$demo$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("a", {
                                        href: `#${id}`,
                                        children: label
                                    }, id, false, {
                                        fileName: "[project]/family-dental-demo/app/page.js",
                                        lineNumber: 72,
                                        columnNumber: 128
                                    }, this))
                            }, void 0, false, {
                                fileName: "[project]/family-dental-demo/app/page.js",
                                lineNumber: 72,
                                columnNumber: 42
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$family$2d$dental$2d$demo$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                className: "button nav-cta",
                                onClick: ()=>inquire(),
                                children: [
                                    "Book an Appointment ",
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$family$2d$dental$2d$demo$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(Icon, {
                                        name: "arrow"
                                    }, void 0, false, {
                                        fileName: "[project]/family-dental-demo/app/page.js",
                                        lineNumber: 72,
                                        columnNumber: 256
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/family-dental-demo/app/page.js",
                                lineNumber: 72,
                                columnNumber: 175
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$family$2d$dental$2d$demo$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                ref: menuButton,
                                className: `menu-button ${menu ? 'is-open' : ''}`,
                                "aria-label": menu ? 'Close navigation' : 'Open navigation',
                                "aria-expanded": menu,
                                "aria-controls": "mobile-nav",
                                onClick: ()=>setMenu(!menu),
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$family$2d$dental$2d$demo$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {}, void 0, false, {
                                        fileName: "[project]/family-dental-demo/app/page.js",
                                        lineNumber: 72,
                                        columnNumber: 500
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$family$2d$dental$2d$demo$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {}, void 0, false, {
                                        fileName: "[project]/family-dental-demo/app/page.js",
                                        lineNumber: 72,
                                        columnNumber: 508
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/family-dental-demo/app/page.js",
                                lineNumber: 72,
                                columnNumber: 286
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/family-dental-demo/app/page.js",
                        lineNumber: 72,
                        columnNumber: 7
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$family$2d$dental$2d$demo$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: `mobile-menu ${menu ? 'open' : ''}`,
                        inert: !menu ? true : undefined,
                        onKeyDown: (event)=>{
                            if (event.key === 'Escape') {
                                setMenu(false);
                                menuButton.current?.focus();
                            }
                        },
                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$family$2d$dental$2d$demo$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("nav", {
                            id: "mobile-nav",
                            "aria-label": "Mobile navigation",
                            children: [
                                links.map(([label, id])=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$family$2d$dental$2d$demo$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("a", {
                                        href: `#${id}`,
                                        onClick: ()=>setMenu(false),
                                        children: [
                                            label,
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$family$2d$dental$2d$demo$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(Icon, {
                                                name: "arrow"
                                            }, void 0, false, {
                                                fileName: "[project]/family-dental-demo/app/page.js",
                                                lineNumber: 73,
                                                columnNumber: 341
                                            }, this)
                                        ]
                                    }, id, true, {
                                        fileName: "[project]/family-dental-demo/app/page.js",
                                        lineNumber: 73,
                                        columnNumber: 275
                                    }, this)),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$family$2d$dental$2d$demo$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                    className: "button",
                                    onClick: ()=>inquire(),
                                    children: "Book an Appointment"
                                }, void 0, false, {
                                    fileName: "[project]/family-dental-demo/app/page.js",
                                    lineNumber: 73,
                                    columnNumber: 368
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/family-dental-demo/app/page.js",
                            lineNumber: 73,
                            columnNumber: 195
                        }, this)
                    }, void 0, false, {
                        fileName: "[project]/family-dental-demo/app/page.js",
                        lineNumber: 73,
                        columnNumber: 7
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/family-dental-demo/app/page.js",
                lineNumber: 71,
                columnNumber: 5
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$family$2d$dental$2d$demo$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("main", {
                id: "main",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$family$2d$dental$2d$demo$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("section", {
                        id: "home",
                        className: "hero",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$family$2d$dental$2d$demo$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(Photo, {
                                src: photos.hero,
                                alt: "AI illustration of a Pakistani dentist consulting with a patient",
                                className: "hero-background",
                                priority: true
                            }, void 0, false, {
                                fileName: "[project]/family-dental-demo/app/page.js",
                                lineNumber: 77,
                                columnNumber: 9
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$family$2d$dental$2d$demo$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "container hero-inner",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$family$2d$dental$2d$demo$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "hero-copy",
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$family$2d$dental$2d$demo$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                className: "eyebrow",
                                                children: "A healthy smile starts here"
                                            }, void 0, false, {
                                                fileName: "[project]/family-dental-demo/app/page.js",
                                                lineNumber: 78,
                                                columnNumber: 74
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$family$2d$dental$2d$demo$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h1", {
                                                children: [
                                                    "A little care.",
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$family$2d$dental$2d$demo$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("br", {}, void 0, false, {
                                                        fileName: "[project]/family-dental-demo/app/page.js",
                                                        lineNumber: 78,
                                                        columnNumber: 146
                                                    }, this),
                                                    "A brighter",
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$family$2d$dental$2d$demo$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("br", {}, void 0, false, {
                                                        fileName: "[project]/family-dental-demo/app/page.js",
                                                        lineNumber: 78,
                                                        columnNumber: 162
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$family$2d$dental$2d$demo$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("em", {
                                                        children: "smile."
                                                    }, void 0, false, {
                                                        fileName: "[project]/family-dental-demo/app/page.js",
                                                        lineNumber: 78,
                                                        columnNumber: 168
                                                    }, this)
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/family-dental-demo/app/page.js",
                                                lineNumber: 78,
                                                columnNumber: 128
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$family$2d$dental$2d$demo$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                className: "intro",
                                                children: "Dental care for every generation. Start your journey to a confident smile with Family Dental Clinic, Mirpur."
                                            }, void 0, false, {
                                                fileName: "[project]/family-dental-demo/app/page.js",
                                                lineNumber: 78,
                                                columnNumber: 188
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$family$2d$dental$2d$demo$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                                className: "button",
                                                onClick: ()=>inquire(),
                                                children: [
                                                    "Book an Appointment ",
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$family$2d$dental$2d$demo$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(Icon, {
                                                        name: "arrow"
                                                    }, void 0, false, {
                                                        fileName: "[project]/family-dental-demo/app/page.js",
                                                        lineNumber: 78,
                                                        columnNumber: 394
                                                    }, this)
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/family-dental-demo/app/page.js",
                                                lineNumber: 78,
                                                columnNumber: 321
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$family$2d$dental$2d$demo$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("a", {
                                                className: "hero-phone",
                                                href: PHONE,
                                                children: [
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$family$2d$dental$2d$demo$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(Icon, {
                                                        name: "phone"
                                                    }, void 0, false, {
                                                        fileName: "[project]/family-dental-demo/app/page.js",
                                                        lineNumber: 78,
                                                        columnNumber: 463
                                                    }, this),
                                                    " +92 320 3771995"
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/family-dental-demo/app/page.js",
                                                lineNumber: 78,
                                                columnNumber: 424
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/family-dental-demo/app/page.js",
                                        lineNumber: 78,
                                        columnNumber: 47
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$family$2d$dental$2d$demo$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "hero-note",
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$family$2d$dental$2d$demo$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                children: "FAMILY DENTAL CLINIC"
                                            }, void 0, false, {
                                                fileName: "[project]/family-dental-demo/app/page.js",
                                                lineNumber: 78,
                                                columnNumber: 537
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$family$2d$dental$2d$demo$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("strong", {
                                                children: [
                                                    "Healthy smiles.",
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$family$2d$dental$2d$demo$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("br", {}, void 0, false, {
                                                        fileName: "[project]/family-dental-demo/app/page.js",
                                                        lineNumber: 78,
                                                        columnNumber: 593
                                                    }, this),
                                                    "Happy families."
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/family-dental-demo/app/page.js",
                                                lineNumber: 78,
                                                columnNumber: 570
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$family$2d$dental$2d$demo$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("a", {
                                                href: "#treatments",
                                                children: [
                                                    "Discover our care ",
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$family$2d$dental$2d$demo$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(Icon, {
                                                        name: "arrow"
                                                    }, void 0, false, {
                                                        fileName: "[project]/family-dental-demo/app/page.js",
                                                        lineNumber: 78,
                                                        columnNumber: 663
                                                    }, this)
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/family-dental-demo/app/page.js",
                                                lineNumber: 78,
                                                columnNumber: 623
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/family-dental-demo/app/page.js",
                                        lineNumber: 78,
                                        columnNumber: 510
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/family-dental-demo/app/page.js",
                                lineNumber: 78,
                                columnNumber: 9
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$family$2d$dental$2d$demo$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                className: "hero-image-credit",
                                children: "AI-generated concept image"
                            }, void 0, false, {
                                fileName: "[project]/family-dental-demo/app/page.js",
                                lineNumber: 79,
                                columnNumber: 9
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/family-dental-demo/app/page.js",
                        lineNumber: 76,
                        columnNumber: 7
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$family$2d$dental$2d$demo$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("section", {
                        className: "trust-band",
                        "aria-label": "Our care concept",
                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$family$2d$dental$2d$demo$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "container trust-grid",
                            children: [
                                [
                                    'heart',
                                    'For the whole family',
                                    'Every age. Every kind of smile.'
                                ],
                                [
                                    'spark',
                                    'A welcoming setting',
                                    'A fresh, thoughtful care concept.'
                                ],
                                [
                                    'chat',
                                    'Clarity at every step',
                                    'Questions deserve clear answers.'
                                ],
                                [
                                    'leaf',
                                    'Your comfort matters',
                                    'A little reassurance goes a long way.'
                                ]
                            ].map(([icon, title, text])=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$family$2d$dental$2d$demo$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "trust-item",
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$family$2d$dental$2d$demo$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(Icon, {
                                            name: icon
                                        }, void 0, false, {
                                            fileName: "[project]/family-dental-demo/app/page.js",
                                            lineNumber: 81,
                                            columnNumber: 465
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$family$2d$dental$2d$demo$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$family$2d$dental$2d$demo$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h3", {
                                                    children: title
                                                }, void 0, false, {
                                                    fileName: "[project]/family-dental-demo/app/page.js",
                                                    lineNumber: 81,
                                                    columnNumber: 490
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$family$2d$dental$2d$demo$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                    children: text
                                                }, void 0, false, {
                                                    fileName: "[project]/family-dental-demo/app/page.js",
                                                    lineNumber: 81,
                                                    columnNumber: 506
                                                }, this)
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/family-dental-demo/app/page.js",
                                            lineNumber: 81,
                                            columnNumber: 485
                                        }, this)
                                    ]
                                }, title, true, {
                                    fileName: "[project]/family-dental-demo/app/page.js",
                                    lineNumber: 81,
                                    columnNumber: 425
                                }, this))
                        }, void 0, false, {
                            fileName: "[project]/family-dental-demo/app/page.js",
                            lineNumber: 81,
                            columnNumber: 69
                        }, this)
                    }, void 0, false, {
                        fileName: "[project]/family-dental-demo/app/page.js",
                        lineNumber: 81,
                        columnNumber: 7
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$family$2d$dental$2d$demo$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("section", {
                        id: "treatments",
                        className: "section container",
                        "data-reveal": true,
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$family$2d$dental$2d$demo$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "section-heading",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$family$2d$dental$2d$demo$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$family$2d$dental$2d$demo$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                className: "eyebrow",
                                                children: "Our services"
                                            }, void 0, false, {
                                                fileName: "[project]/family-dental-demo/app/page.js",
                                                lineNumber: 82,
                                                columnNumber: 112
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$family$2d$dental$2d$demo$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h2", {
                                                children: [
                                                    "A wide range of",
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$family$2d$dental$2d$demo$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("br", {}, void 0, false, {
                                                        fileName: "[project]/family-dental-demo/app/page.js",
                                                        lineNumber: 82,
                                                        columnNumber: 170
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$family$2d$dental$2d$demo$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("em", {
                                                        children: "dental care."
                                                    }, void 0, false, {
                                                        fileName: "[project]/family-dental-demo/app/page.js",
                                                        lineNumber: 82,
                                                        columnNumber: 176
                                                    }, this)
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/family-dental-demo/app/page.js",
                                                lineNumber: 82,
                                                columnNumber: 151
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/family-dental-demo/app/page.js",
                                        lineNumber: 82,
                                        columnNumber: 107
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$family$2d$dental$2d$demo$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "section-aside",
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$family$2d$dental$2d$demo$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                children: "From everyday questions to your next steps, explore a more considered approach to dental care."
                                            }, void 0, false, {
                                                fileName: "[project]/family-dental-demo/app/page.js",
                                                lineNumber: 82,
                                                columnNumber: 239
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$family$2d$dental$2d$demo$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                className: "disclaimer",
                                                children: "Illustrative treatment categories. Please contact the clinic to confirm availability and suitability."
                                            }, void 0, false, {
                                                fileName: "[project]/family-dental-demo/app/page.js",
                                                lineNumber: 82,
                                                columnNumber: 340
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/family-dental-demo/app/page.js",
                                        lineNumber: 82,
                                        columnNumber: 208
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/family-dental-demo/app/page.js",
                                lineNumber: 82,
                                columnNumber: 74
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$family$2d$dental$2d$demo$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "treatment-grid",
                                children: treatments.map(([title, description, icon], i)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$family$2d$dental$2d$demo$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("article", {
                                        className: "treatment",
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$family$2d$dental$2d$demo$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                className: "treatment-top",
                                                children: [
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$family$2d$dental$2d$demo$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                        className: "treatment-icon",
                                                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$family$2d$dental$2d$demo$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(Icon, {
                                                            name: icon
                                                        }, void 0, false, {
                                                            fileName: "[project]/family-dental-demo/app/page.js",
                                                            lineNumber: 82,
                                                            columnNumber: 673
                                                        }, this)
                                                    }, void 0, false, {
                                                        fileName: "[project]/family-dental-demo/app/page.js",
                                                        lineNumber: 82,
                                                        columnNumber: 640
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$family$2d$dental$2d$demo$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                        className: "index",
                                                        children: [
                                                            "0",
                                                            i + 1
                                                        ]
                                                    }, void 0, true, {
                                                        fileName: "[project]/family-dental-demo/app/page.js",
                                                        lineNumber: 82,
                                                        columnNumber: 700
                                                    }, this)
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/family-dental-demo/app/page.js",
                                                lineNumber: 82,
                                                columnNumber: 609
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$family$2d$dental$2d$demo$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h3", {
                                                children: title
                                            }, void 0, false, {
                                                fileName: "[project]/family-dental-demo/app/page.js",
                                                lineNumber: 82,
                                                columnNumber: 745
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$family$2d$dental$2d$demo$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                children: description
                                            }, void 0, false, {
                                                fileName: "[project]/family-dental-demo/app/page.js",
                                                lineNumber: 82,
                                                columnNumber: 761
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$family$2d$dental$2d$demo$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                                className: "card-link",
                                                onClick: ()=>inquire(title),
                                                "aria-label": `Ask about ${title}`,
                                                children: [
                                                    "Ask About This Treatment ",
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$family$2d$dental$2d$demo$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(Icon, {
                                                        name: "arrow"
                                                    }, void 0, false, {
                                                        fileName: "[project]/family-dental-demo/app/page.js",
                                                        lineNumber: 82,
                                                        columnNumber: 901
                                                    }, this)
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/family-dental-demo/app/page.js",
                                                lineNumber: 82,
                                                columnNumber: 781
                                            }, this)
                                        ]
                                    }, title, true, {
                                        fileName: "[project]/family-dental-demo/app/page.js",
                                        lineNumber: 82,
                                        columnNumber: 566
                                    }, this))
                            }, void 0, false, {
                                fileName: "[project]/family-dental-demo/app/page.js",
                                lineNumber: 82,
                                columnNumber: 483
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/family-dental-demo/app/page.js",
                        lineNumber: 82,
                        columnNumber: 7
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$family$2d$dental$2d$demo$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("section", {
                        id: "about",
                        className: "about-section",
                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$family$2d$dental$2d$demo$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "container about-grid",
                            "data-reveal": true,
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$family$2d$dental$2d$demo$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "about-art",
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$family$2d$dental$2d$demo$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(Photo, {
                                            src: photos.room,
                                            alt: "AI illustration of a Pakistani dentist welcoming a mother and daughter",
                                            className: "about-photo"
                                        }, void 0, false, {
                                            fileName: "[project]/family-dental-demo/app/page.js",
                                            lineNumber: 83,
                                            columnNumber: 130
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$family$2d$dental$2d$demo$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            className: "about-stamp",
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$family$2d$dental$2d$demo$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(Icon, {
                                                    name: "tooth"
                                                }, void 0, false, {
                                                    fileName: "[project]/family-dental-demo/app/page.js",
                                                    lineNumber: 83,
                                                    columnNumber: 287
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$family$2d$dental$2d$demo$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                    children: [
                                                        "Thoughtful care.",
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$family$2d$dental$2d$demo$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("br", {}, void 0, false, {
                                                            fileName: "[project]/family-dental-demo/app/page.js",
                                                            lineNumber: 83,
                                                            columnNumber: 330
                                                        }, this),
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$family$2d$dental$2d$demo$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("em", {
                                                            children: "Human connection."
                                                        }, void 0, false, {
                                                            fileName: "[project]/family-dental-demo/app/page.js",
                                                            lineNumber: 83,
                                                            columnNumber: 336
                                                        }, this)
                                                    ]
                                                }, void 0, true, {
                                                    fileName: "[project]/family-dental-demo/app/page.js",
                                                    lineNumber: 83,
                                                    columnNumber: 308
                                                }, this)
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/family-dental-demo/app/page.js",
                                            lineNumber: 83,
                                            columnNumber: 258
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$family$2d$dental$2d$demo$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                            className: "image-caption",
                                            children: "AI-GENERATED CLINIC CONCEPT"
                                        }, void 0, false, {
                                            fileName: "[project]/family-dental-demo/app/page.js",
                                            lineNumber: 83,
                                            columnNumber: 375
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/family-dental-demo/app/page.js",
                                    lineNumber: 83,
                                    columnNumber: 103
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$family$2d$dental$2d$demo$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "about-copy",
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$family$2d$dental$2d$demo$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                            className: "eyebrow",
                                            children: "The heart of the experience"
                                        }, void 0, false, {
                                            fileName: "[project]/family-dental-demo/app/page.js",
                                            lineNumber: 83,
                                            columnNumber: 469
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$family$2d$dental$2d$demo$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h2", {
                                            children: [
                                                "A familiar place.",
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$family$2d$dental$2d$demo$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("br", {}, void 0, false, {
                                                    fileName: "[project]/family-dental-demo/app/page.js",
                                                    lineNumber: 83,
                                                    columnNumber: 544
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$family$2d$dental$2d$demo$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("em", {
                                                    children: "A friendly welcome."
                                                }, void 0, false, {
                                                    fileName: "[project]/family-dental-demo/app/page.js",
                                                    lineNumber: 83,
                                                    columnNumber: 550
                                                }, this)
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/family-dental-demo/app/page.js",
                                            lineNumber: 83,
                                            columnNumber: 523
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$family$2d$dental$2d$demo$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                            className: "large-copy",
                                            children: "A dental visit should begin with a conversation, not a feeling of uncertainty."
                                        }, void 0, false, {
                                            fileName: "[project]/family-dental-demo/app/page.js",
                                            lineNumber: 83,
                                            columnNumber: 583
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$family$2d$dental$2d$demo$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                            children: "Explore dental care for your family in Mirpur. Contact the clinic to discuss your concerns, ask about treatment options, and plan your next visit."
                                        }, void 0, false, {
                                            fileName: "[project]/family-dental-demo/app/page.js",
                                            lineNumber: 83,
                                            columnNumber: 691
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$family$2d$dental$2d$demo$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            className: "about-points",
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$family$2d$dental$2d$demo$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                    children: [
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$family$2d$dental$2d$demo$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(Icon, {
                                                            name: "heart"
                                                        }, void 0, false, {
                                                            fileName: "[project]/family-dental-demo/app/page.js",
                                                            lineNumber: 83,
                                                            columnNumber: 880
                                                        }, this),
                                                        " A thoughtful welcome for adults and children"
                                                    ]
                                                }, void 0, true, {
                                                    fileName: "[project]/family-dental-demo/app/page.js",
                                                    lineNumber: 83,
                                                    columnNumber: 874
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$family$2d$dental$2d$demo$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                    children: [
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$family$2d$dental$2d$demo$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(Icon, {
                                                            name: "chat"
                                                        }, void 0, false, {
                                                            fileName: "[project]/family-dental-demo/app/page.js",
                                                            lineNumber: 83,
                                                            columnNumber: 959
                                                        }, this),
                                                        " Clear conversations about your dental needs"
                                                    ]
                                                }, void 0, true, {
                                                    fileName: "[project]/family-dental-demo/app/page.js",
                                                    lineNumber: 83,
                                                    columnNumber: 953
                                                }, this)
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/family-dental-demo/app/page.js",
                                            lineNumber: 83,
                                            columnNumber: 844
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$family$2d$dental$2d$demo$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("a", {
                                            className: "text-link",
                                            href: "#patient-care",
                                            children: [
                                                "Discover the patient experience ",
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$family$2d$dental$2d$demo$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                    children: "↗"
                                                }, void 0, false, {
                                                    fileName: "[project]/family-dental-demo/app/page.js",
                                                    lineNumber: 83,
                                                    columnNumber: 1114
                                                }, this)
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/family-dental-demo/app/page.js",
                                            lineNumber: 83,
                                            columnNumber: 1036
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/family-dental-demo/app/page.js",
                                    lineNumber: 83,
                                    columnNumber: 441
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/family-dental-demo/app/page.js",
                            lineNumber: 83,
                            columnNumber: 53
                        }, this)
                    }, void 0, false, {
                        fileName: "[project]/family-dental-demo/app/page.js",
                        lineNumber: 83,
                        columnNumber: 7
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$family$2d$dental$2d$demo$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("section", {
                        id: "patient-care",
                        className: "section container",
                        "data-reveal": true,
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$family$2d$dental$2d$demo$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "center-heading",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$family$2d$dental$2d$demo$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                        className: "eyebrow",
                                        children: "Simple steps. A thoughtful experience."
                                    }, void 0, false, {
                                        fileName: "[project]/family-dental-demo/app/page.js",
                                        lineNumber: 84,
                                        columnNumber: 108
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$family$2d$dental$2d$demo$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h2", {
                                        children: [
                                            "Feel at ease.",
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$family$2d$dental$2d$demo$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("br", {}, void 0, false, {
                                                fileName: "[project]/family-dental-demo/app/page.js",
                                                lineNumber: 84,
                                                columnNumber: 190
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$family$2d$dental$2d$demo$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("em", {
                                                children: "From the very first hello."
                                            }, void 0, false, {
                                                fileName: "[project]/family-dental-demo/app/page.js",
                                                lineNumber: 84,
                                                columnNumber: 196
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/family-dental-demo/app/page.js",
                                        lineNumber: 84,
                                        columnNumber: 173
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/family-dental-demo/app/page.js",
                                lineNumber: 84,
                                columnNumber: 76
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$family$2d$dental$2d$demo$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "steps",
                                children: [
                                    [
                                        'Request Your Visit',
                                        'Get in touch with the clinic to discuss a suitable time for your visit.'
                                    ],
                                    [
                                        'Discuss Your Dental Needs',
                                        'Share your questions, concerns, and what you would like help with.'
                                    ],
                                    [
                                        'Explore Your Treatment Options',
                                        'Discuss possible next steps and make space for an informed conversation.'
                                    ]
                                ].map(([title, text], i)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$family$2d$dental$2d$demo$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("article", {
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$family$2d$dental$2d$demo$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                className: "step-number",
                                                children: [
                                                    "0",
                                                    i + 1,
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$family$2d$dental$2d$demo$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {}, void 0, false, {
                                                        fileName: "[project]/family-dental-demo/app/page.js",
                                                        lineNumber: 84,
                                                        columnNumber: 663
                                                    }, this)
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/family-dental-demo/app/page.js",
                                                lineNumber: 84,
                                                columnNumber: 626
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$family$2d$dental$2d$demo$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h3", {
                                                children: title
                                            }, void 0, false, {
                                                fileName: "[project]/family-dental-demo/app/page.js",
                                                lineNumber: 84,
                                                columnNumber: 677
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$family$2d$dental$2d$demo$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                children: text
                                            }, void 0, false, {
                                                fileName: "[project]/family-dental-demo/app/page.js",
                                                lineNumber: 84,
                                                columnNumber: 693
                                            }, this)
                                        ]
                                    }, title, true, {
                                        fileName: "[project]/family-dental-demo/app/page.js",
                                        lineNumber: 84,
                                        columnNumber: 605
                                    }, this))
                            }, void 0, false, {
                                fileName: "[project]/family-dental-demo/app/page.js",
                                lineNumber: 84,
                                columnNumber: 242
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$family$2d$dental$2d$demo$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                className: "steps-note",
                                children: "This is a website concept. Appointment inquiries here are illustrative and are not connected to a live booking system."
                            }, void 0, false, {
                                fileName: "[project]/family-dental-demo/app/page.js",
                                lineNumber: 84,
                                columnNumber: 724
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/family-dental-demo/app/page.js",
                        lineNumber: 84,
                        columnNumber: 7
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$family$2d$dental$2d$demo$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("section", {
                        className: "gallery-section",
                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$family$2d$dental$2d$demo$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "container",
                            "data-reveal": true,
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$family$2d$dental$2d$demo$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "section-heading",
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$family$2d$dental$2d$demo$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$family$2d$dental$2d$demo$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                    className: "eyebrow",
                                                    children: "A glimpse of the feeling"
                                                }, void 0, false, {
                                                    fileName: "[project]/family-dental-demo/app/page.js",
                                                    lineNumber: 85,
                                                    columnNumber: 121
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$family$2d$dental$2d$demo$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h2", {
                                                    children: [
                                                        "More comfort.",
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$family$2d$dental$2d$demo$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("br", {}, void 0, false, {
                                                            fileName: "[project]/family-dental-demo/app/page.js",
                                                            lineNumber: 85,
                                                            columnNumber: 189
                                                        }, this),
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$family$2d$dental$2d$demo$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("em", {
                                                            children: "More reasons to smile."
                                                        }, void 0, false, {
                                                            fileName: "[project]/family-dental-demo/app/page.js",
                                                            lineNumber: 85,
                                                            columnNumber: 195
                                                        }, this)
                                                    ]
                                                }, void 0, true, {
                                                    fileName: "[project]/family-dental-demo/app/page.js",
                                                    lineNumber: 85,
                                                    columnNumber: 172
                                                }, this)
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/family-dental-demo/app/page.js",
                                            lineNumber: 85,
                                            columnNumber: 116
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$family$2d$dental$2d$demo$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                            className: "section-aside",
                                            children: "Light-filled spaces. Attentive conversations. A visual direction built around feeling welcome."
                                        }, void 0, false, {
                                            fileName: "[project]/family-dental-demo/app/page.js",
                                            lineNumber: 85,
                                            columnNumber: 237
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/family-dental-demo/app/page.js",
                                    lineNumber: 85,
                                    columnNumber: 83
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$family$2d$dental$2d$demo$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "gallery",
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$family$2d$dental$2d$demo$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("figure", {
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$family$2d$dental$2d$demo$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(Photo, {
                                                    src: photos.room,
                                                    alt: "AI illustration of a Pakistani family arriving at a dental clinic"
                                                }, void 0, false, {
                                                    fileName: "[project]/family-dental-demo/app/page.js",
                                                    lineNumber: 85,
                                                    columnNumber: 403
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$family$2d$dental$2d$demo$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("figcaption", {
                                                    children: [
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$family$2d$dental$2d$demo$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                            children: "01"
                                                        }, void 0, false, {
                                                            fileName: "[project]/family-dental-demo/app/page.js",
                                                            lineNumber: 85,
                                                            columnNumber: 514
                                                        }, this),
                                                        " A welcoming space"
                                                    ]
                                                }, void 0, true, {
                                                    fileName: "[project]/family-dental-demo/app/page.js",
                                                    lineNumber: 85,
                                                    columnNumber: 502
                                                }, this)
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/family-dental-demo/app/page.js",
                                            lineNumber: 85,
                                            columnNumber: 395
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$family$2d$dental$2d$demo$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("figure", {
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$family$2d$dental$2d$demo$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(Photo, {
                                                    src: photos.care,
                                                    alt: "AI illustration of a Pakistani dentist explaining a dental model"
                                                }, void 0, false, {
                                                    fileName: "[project]/family-dental-demo/app/page.js",
                                                    lineNumber: 85,
                                                    columnNumber: 577
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$family$2d$dental$2d$demo$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("figcaption", {
                                                    children: [
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$family$2d$dental$2d$demo$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                            children: "02"
                                                        }, void 0, false, {
                                                            fileName: "[project]/family-dental-demo/app/page.js",
                                                            lineNumber: 85,
                                                            columnNumber: 687
                                                        }, this),
                                                        " Care in the details"
                                                    ]
                                                }, void 0, true, {
                                                    fileName: "[project]/family-dental-demo/app/page.js",
                                                    lineNumber: 85,
                                                    columnNumber: 675
                                                }, this)
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/family-dental-demo/app/page.js",
                                            lineNumber: 85,
                                            columnNumber: 569
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$family$2d$dental$2d$demo$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("figure", {
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$family$2d$dental$2d$demo$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(Photo, {
                                                    src: photos.visit,
                                                    alt: "AI illustration of a Pakistani father and son in a clinic waiting area"
                                                }, void 0, false, {
                                                    fileName: "[project]/family-dental-demo/app/page.js",
                                                    lineNumber: 85,
                                                    columnNumber: 752
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$family$2d$dental$2d$demo$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("figcaption", {
                                                    children: [
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$family$2d$dental$2d$demo$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                            children: "03"
                                                        }, void 0, false, {
                                                            fileName: "[project]/family-dental-demo/app/page.js",
                                                            lineNumber: 85,
                                                            columnNumber: 869
                                                        }, this),
                                                        " Time for your smile"
                                                    ]
                                                }, void 0, true, {
                                                    fileName: "[project]/family-dental-demo/app/page.js",
                                                    lineNumber: 85,
                                                    columnNumber: 857
                                                }, this)
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/family-dental-demo/app/page.js",
                                            lineNumber: 85,
                                            columnNumber: 744
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/family-dental-demo/app/page.js",
                                    lineNumber: 85,
                                    columnNumber: 370
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$family$2d$dental$2d$demo$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                    className: "disclaimer",
                                    children: "AI-generated imagery showing Pakistani dental care and family scenes. These are illustrative concepts, not photographs of the clinic, its staff, or patients."
                                }, void 0, false, {
                                    fileName: "[project]/family-dental-demo/app/page.js",
                                    lineNumber: 85,
                                    columnNumber: 932
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/family-dental-demo/app/page.js",
                            lineNumber: 85,
                            columnNumber: 44
                        }, this)
                    }, void 0, false, {
                        fileName: "[project]/family-dental-demo/app/page.js",
                        lineNumber: 85,
                        columnNumber: 7
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$family$2d$dental$2d$demo$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("section", {
                        id: "faq",
                        className: "section container faq-section",
                        "data-reveal": true,
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$family$2d$dental$2d$demo$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$family$2d$dental$2d$demo$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                        className: "eyebrow",
                                        children: "A little clarity"
                                    }, void 0, false, {
                                        fileName: "[project]/family-dental-demo/app/page.js",
                                        lineNumber: 86,
                                        columnNumber: 84
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$family$2d$dental$2d$demo$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h2", {
                                        children: [
                                            "Questions?",
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$family$2d$dental$2d$demo$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("br", {}, void 0, false, {
                                                fileName: "[project]/family-dental-demo/app/page.js",
                                                lineNumber: 86,
                                                columnNumber: 141
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$family$2d$dental$2d$demo$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("em", {
                                                children: "Let’s talk."
                                            }, void 0, false, {
                                                fileName: "[project]/family-dental-demo/app/page.js",
                                                lineNumber: 86,
                                                columnNumber: 147
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/family-dental-demo/app/page.js",
                                        lineNumber: 86,
                                        columnNumber: 127
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$family$2d$dental$2d$demo$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                        children: "Getting ready for your visit should feel simple. Here is where to start."
                                    }, void 0, false, {
                                        fileName: "[project]/family-dental-demo/app/page.js",
                                        lineNumber: 86,
                                        columnNumber: 172
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$family$2d$dental$2d$demo$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                        className: "button",
                                        onClick: ()=>inquire(),
                                        children: [
                                            "Ask the clinic ",
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$family$2d$dental$2d$demo$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(Icon, {
                                                name: "chat"
                                            }, void 0, false, {
                                                fileName: "[project]/family-dental-demo/app/page.js",
                                                lineNumber: 86,
                                                columnNumber: 319
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/family-dental-demo/app/page.js",
                                        lineNumber: 86,
                                        columnNumber: 251
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/family-dental-demo/app/page.js",
                                lineNumber: 86,
                                columnNumber: 79
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$family$2d$dental$2d$demo$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "faq-list",
                                children: [
                                    [
                                        'How do I arrange an appointment?',
                                        'Call +92 320 3771995 to discuss a suitable date and time. Your appointment is confirmed directly by the clinic.'
                                    ],
                                    [
                                        'Where is the clinic located?',
                                        ADDRESS
                                    ],
                                    [
                                        'Which treatments can I ask about?',
                                        'Explore the treatment categories above, then contact the clinic to confirm which services are available and appropriate for you.'
                                    ],
                                    [
                                        'What are the opening hours and treatment fees?',
                                        'Please call the clinic for current opening hours, consultation fees, and a treatment estimate.'
                                    ],
                                    [
                                        'What should I bring to my first visit?',
                                        'Ask the clinic when arranging your visit whether you should bring previous dental records, X-rays, or other information.'
                                    ]
                                ].map(([q, a])=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$family$2d$dental$2d$demo$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("details", {
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$family$2d$dental$2d$demo$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("summary", {
                                                children: [
                                                    q,
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$family$2d$dental$2d$demo$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                        "aria-hidden": "true",
                                                        children: "+"
                                                    }, void 0, false, {
                                                        fileName: "[project]/family-dental-demo/app/page.js",
                                                        lineNumber: 92,
                                                        columnNumber: 54
                                                    }, this)
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/family-dental-demo/app/page.js",
                                                lineNumber: 92,
                                                columnNumber: 42
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$family$2d$dental$2d$demo$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                children: a
                                            }, void 0, false, {
                                                fileName: "[project]/family-dental-demo/app/page.js",
                                                lineNumber: 92,
                                                columnNumber: 97
                                            }, this)
                                        ]
                                    }, q, true, {
                                        fileName: "[project]/family-dental-demo/app/page.js",
                                        lineNumber: 92,
                                        columnNumber: 25
                                    }, this))
                            }, void 0, false, {
                                fileName: "[project]/family-dental-demo/app/page.js",
                                lineNumber: 86,
                                columnNumber: 354
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/family-dental-demo/app/page.js",
                        lineNumber: 86,
                        columnNumber: 7
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$family$2d$dental$2d$demo$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("section", {
                        className: "container appointment-section",
                        id: "appointment",
                        "data-reveal": true,
                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$family$2d$dental$2d$demo$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "appointment-panel",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$family$2d$dental$2d$demo$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "appointment-decoration",
                                    "aria-hidden": "true",
                                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$family$2d$dental$2d$demo$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(Icon, {}, void 0, false, {
                                        fileName: "[project]/family-dental-demo/app/page.js",
                                        lineNumber: 93,
                                        columnNumber: 181
                                    }, this)
                                }, void 0, false, {
                                    fileName: "[project]/family-dental-demo/app/page.js",
                                    lineNumber: 93,
                                    columnNumber: 122
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$family$2d$dental$2d$demo$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                    className: "eyebrow",
                                    children: "Let’s start with a conversation"
                                }, void 0, false, {
                                    fileName: "[project]/family-dental-demo/app/page.js",
                                    lineNumber: 93,
                                    columnNumber: 195
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$family$2d$dental$2d$demo$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h2", {
                                    children: [
                                        "Your Next Smile",
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$family$2d$dental$2d$demo$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("br", {}, void 0, false, {
                                            fileName: "[project]/family-dental-demo/app/page.js",
                                            lineNumber: 93,
                                            columnNumber: 272
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$family$2d$dental$2d$demo$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("em", {
                                            children: "Starts Here."
                                        }, void 0, false, {
                                            fileName: "[project]/family-dental-demo/app/page.js",
                                            lineNumber: 93,
                                            columnNumber: 278
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/family-dental-demo/app/page.js",
                                    lineNumber: 93,
                                    columnNumber: 253
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$family$2d$dental$2d$demo$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                    children: [
                                        "Have a question or ready to arrange a visit?",
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$family$2d$dental$2d$demo$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("br", {}, void 0, false, {
                                            fileName: "[project]/family-dental-demo/app/page.js",
                                            lineNumber: 93,
                                            columnNumber: 351
                                        }, this),
                                        "Contact the clinic and take the next step at your own pace."
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/family-dental-demo/app/page.js",
                                    lineNumber: 93,
                                    columnNumber: 304
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$family$2d$dental$2d$demo$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "appointment-actions",
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$family$2d$dental$2d$demo$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                            className: "button button-light",
                                            onClick: ()=>inquire(),
                                            children: [
                                                "Request an Appointment ",
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$family$2d$dental$2d$demo$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(Icon, {
                                                    name: "arrow"
                                                }, void 0, false, {
                                                    fileName: "[project]/family-dental-demo/app/page.js",
                                                    lineNumber: 93,
                                                    columnNumber: 546
                                                }, this)
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/family-dental-demo/app/page.js",
                                            lineNumber: 93,
                                            columnNumber: 457
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$family$2d$dental$2d$demo$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("a", {
                                            className: "call-link",
                                            href: PHONE,
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$family$2d$dental$2d$demo$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(Icon, {
                                                    name: "phone"
                                                }, void 0, false, {
                                                    fileName: "[project]/family-dental-demo/app/page.js",
                                                    lineNumber: 93,
                                                    columnNumber: 614
                                                }, this),
                                                " +92 320 3771995"
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/family-dental-demo/app/page.js",
                                            lineNumber: 93,
                                            columnNumber: 576
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/family-dental-demo/app/page.js",
                                    lineNumber: 93,
                                    columnNumber: 420
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$family$2d$dental$2d$demo$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("a", {
                                    className: "directions-link",
                                    href: MAP,
                                    target: "_blank",
                                    rel: "noreferrer",
                                    children: "Find your way to the clinic ↗"
                                }, void 0, false, {
                                    fileName: "[project]/family-dental-demo/app/page.js",
                                    lineNumber: 93,
                                    columnNumber: 661
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$family$2d$dental$2d$demo$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("small", {
                                    children: "Demo inquiry only. Please call the clinic to arrange an actual appointment."
                                }, void 0, false, {
                                    fileName: "[project]/family-dental-demo/app/page.js",
                                    lineNumber: 93,
                                    columnNumber: 769
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/family-dental-demo/app/page.js",
                            lineNumber: 93,
                            columnNumber: 87
                        }, this)
                    }, void 0, false, {
                        fileName: "[project]/family-dental-demo/app/page.js",
                        lineNumber: 93,
                        columnNumber: 7
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$family$2d$dental$2d$demo$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("section", {
                        id: "contact",
                        className: "container contact-section",
                        "data-reveal": true,
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$family$2d$dental$2d$demo$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$family$2d$dental$2d$demo$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                        className: "eyebrow",
                                        children: "A familiar place, close to home"
                                    }, void 0, false, {
                                        fileName: "[project]/family-dental-demo/app/page.js",
                                        lineNumber: 94,
                                        columnNumber: 84
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$family$2d$dental$2d$demo$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h2", {
                                        children: [
                                            "Find us",
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$family$2d$dental$2d$demo$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("br", {}, void 0, false, {
                                                fileName: "[project]/family-dental-demo/app/page.js",
                                                lineNumber: 94,
                                                columnNumber: 153
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$family$2d$dental$2d$demo$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("em", {
                                                children: "in Mirpur."
                                            }, void 0, false, {
                                                fileName: "[project]/family-dental-demo/app/page.js",
                                                lineNumber: 94,
                                                columnNumber: 159
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/family-dental-demo/app/page.js",
                                        lineNumber: 94,
                                        columnNumber: 142
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$family$2d$dental$2d$demo$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                        className: "contact-intro",
                                        children: "Your next conversation is just a call away."
                                    }, void 0, false, {
                                        fileName: "[project]/family-dental-demo/app/page.js",
                                        lineNumber: 94,
                                        columnNumber: 183
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/family-dental-demo/app/page.js",
                                lineNumber: 94,
                                columnNumber: 79
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$family$2d$dental$2d$demo$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "contact-card",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$family$2d$dental$2d$demo$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "contact-row",
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$family$2d$dental$2d$demo$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                className: "contact-icon",
                                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$family$2d$dental$2d$demo$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(Icon, {
                                                    name: "pin"
                                                }, void 0, false, {
                                                    fileName: "[project]/family-dental-demo/app/page.js",
                                                    lineNumber: 94,
                                                    columnNumber: 355
                                                }, this)
                                            }, void 0, false, {
                                                fileName: "[project]/family-dental-demo/app/page.js",
                                                lineNumber: 94,
                                                columnNumber: 324
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$family$2d$dental$2d$demo$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                children: [
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$family$2d$dental$2d$demo$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h3", {
                                                        children: "Family Dental Clinic Mirpur"
                                                    }, void 0, false, {
                                                        fileName: "[project]/family-dental-demo/app/page.js",
                                                        lineNumber: 94,
                                                        columnNumber: 386
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$family$2d$dental$2d$demo$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("address", {
                                                        children: ADDRESS
                                                    }, void 0, false, {
                                                        fileName: "[project]/family-dental-demo/app/page.js",
                                                        lineNumber: 94,
                                                        columnNumber: 422
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$family$2d$dental$2d$demo$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("a", {
                                                        className: "text-link",
                                                        href: MAP,
                                                        target: "_blank",
                                                        rel: "noreferrer",
                                                        children: [
                                                            "Get Directions ",
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$family$2d$dental$2d$demo$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                                children: "↗"
                                                            }, void 0, false, {
                                                                fileName: "[project]/family-dental-demo/app/page.js",
                                                                lineNumber: 94,
                                                                columnNumber: 534
                                                            }, this)
                                                        ]
                                                    }, void 0, true, {
                                                        fileName: "[project]/family-dental-demo/app/page.js",
                                                        lineNumber: 94,
                                                        columnNumber: 450
                                                    }, this)
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/family-dental-demo/app/page.js",
                                                lineNumber: 94,
                                                columnNumber: 381
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/family-dental-demo/app/page.js",
                                        lineNumber: 94,
                                        columnNumber: 295
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$family$2d$dental$2d$demo$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "contact-row",
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$family$2d$dental$2d$demo$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                className: "contact-icon",
                                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$family$2d$dental$2d$demo$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(Icon, {
                                                    name: "phone"
                                                }, void 0, false, {
                                                    fileName: "[project]/family-dental-demo/app/page.js",
                                                    lineNumber: 94,
                                                    columnNumber: 624
                                                }, this)
                                            }, void 0, false, {
                                                fileName: "[project]/family-dental-demo/app/page.js",
                                                lineNumber: 94,
                                                columnNumber: 593
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$family$2d$dental$2d$demo$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                children: [
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$family$2d$dental$2d$demo$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                        className: "eyebrow",
                                                        children: "Call the clinic"
                                                    }, void 0, false, {
                                                        fileName: "[project]/family-dental-demo/app/page.js",
                                                        lineNumber: 94,
                                                        columnNumber: 657
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$family$2d$dental$2d$demo$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("a", {
                                                        className: "phone-number",
                                                        href: PHONE,
                                                        children: "+92 320 3771995"
                                                    }, void 0, false, {
                                                        fileName: "[project]/family-dental-demo/app/page.js",
                                                        lineNumber: 94,
                                                        columnNumber: 699
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$family$2d$dental$2d$demo$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                        className: "disclaimer",
                                                        children: "Please call to confirm opening hours and appointment arrangements."
                                                    }, void 0, false, {
                                                        fileName: "[project]/family-dental-demo/app/page.js",
                                                        lineNumber: 94,
                                                        columnNumber: 759
                                                    }, this)
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/family-dental-demo/app/page.js",
                                                lineNumber: 94,
                                                columnNumber: 652
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/family-dental-demo/app/page.js",
                                        lineNumber: 94,
                                        columnNumber: 564
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/family-dental-demo/app/page.js",
                                lineNumber: 94,
                                columnNumber: 265
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/family-dental-demo/app/page.js",
                        lineNumber: 94,
                        columnNumber: 7
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/family-dental-demo/app/page.js",
                lineNumber: 75,
                columnNumber: 5
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$family$2d$dental$2d$demo$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("footer", {
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$family$2d$dental$2d$demo$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "container footer-main",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$family$2d$dental$2d$demo$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$family$2d$dental$2d$demo$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(Brand, {}, void 0, false, {
                                        fileName: "[project]/family-dental-demo/app/page.js",
                                        lineNumber: 96,
                                        columnNumber: 57
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$family$2d$dental$2d$demo$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                        children: [
                                            "Thoughtful care.",
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$family$2d$dental$2d$demo$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("br", {}, void 0, false, {
                                                fileName: "[project]/family-dental-demo/app/page.js",
                                                lineNumber: 96,
                                                columnNumber: 85
                                            }, this),
                                            "For the smiles that matter most."
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/family-dental-demo/app/page.js",
                                        lineNumber: 96,
                                        columnNumber: 66
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/family-dental-demo/app/page.js",
                                lineNumber: 96,
                                columnNumber: 52
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$family$2d$dental$2d$demo$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$family$2d$dental$2d$demo$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h3", {
                                        children: "Explore"
                                    }, void 0, false, {
                                        fileName: "[project]/family-dental-demo/app/page.js",
                                        lineNumber: 96,
                                        columnNumber: 138
                                    }, this),
                                    links.slice(1).map(([label, id])=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$family$2d$dental$2d$demo$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("a", {
                                            href: `#${id}`,
                                            children: label
                                        }, id, false, {
                                            fileName: "[project]/family-dental-demo/app/page.js",
                                            lineNumber: 96,
                                            columnNumber: 191
                                        }, this))
                                ]
                            }, void 0, true, {
                                fileName: "[project]/family-dental-demo/app/page.js",
                                lineNumber: 96,
                                columnNumber: 133
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$family$2d$dental$2d$demo$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "footer-contact",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$family$2d$dental$2d$demo$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h3", {
                                        children: "Come say hello"
                                    }, void 0, false, {
                                        fileName: "[project]/family-dental-demo/app/page.js",
                                        lineNumber: 96,
                                        columnNumber: 270
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$family$2d$dental$2d$demo$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                        children: ADDRESS
                                    }, void 0, false, {
                                        fileName: "[project]/family-dental-demo/app/page.js",
                                        lineNumber: 96,
                                        columnNumber: 293
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$family$2d$dental$2d$demo$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("a", {
                                        href: PHONE,
                                        children: "+92 320 3771995"
                                    }, void 0, false, {
                                        fileName: "[project]/family-dental-demo/app/page.js",
                                        lineNumber: 96,
                                        columnNumber: 309
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$family$2d$dental$2d$demo$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("a", {
                                        href: MAP,
                                        target: "_blank",
                                        rel: "noreferrer",
                                        children: "Google Maps directions ↗"
                                    }, void 0, false, {
                                        fileName: "[project]/family-dental-demo/app/page.js",
                                        lineNumber: 96,
                                        columnNumber: 344
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/family-dental-demo/app/page.js",
                                lineNumber: 96,
                                columnNumber: 238
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/family-dental-demo/app/page.js",
                        lineNumber: 96,
                        columnNumber: 13
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$family$2d$dental$2d$demo$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "container footer-bottom",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$family$2d$dental$2d$demo$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                children: [
                                    "© ",
                                    new Date().getFullYear(),
                                    " Family Dental Clinic Mirpur."
                                ]
                            }, void 0, true, {
                                fileName: "[project]/family-dental-demo/app/page.js",
                                lineNumber: 96,
                                columnNumber: 472
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$family$2d$dental$2d$demo$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                children: "Independent website demo · Not an official clinic website"
                            }, void 0, false, {
                                fileName: "[project]/family-dental-demo/app/page.js",
                                lineNumber: 96,
                                columnNumber: 542
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$family$2d$dental$2d$demo$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("a", {
                                href: "#home",
                                children: "Back to top ↑"
                            }, void 0, false, {
                                fileName: "[project]/family-dental-demo/app/page.js",
                                lineNumber: 96,
                                columnNumber: 612
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/family-dental-demo/app/page.js",
                        lineNumber: 96,
                        columnNumber: 431
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/family-dental-demo/app/page.js",
                lineNumber: 96,
                columnNumber: 5
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$family$2d$dental$2d$demo$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("a", {
                className: "floating-call",
                href: PHONE,
                "aria-label": "Call Family Dental Clinic",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$family$2d$dental$2d$demo$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(Icon, {
                        name: "phone"
                    }, void 0, false, {
                        fileName: "[project]/family-dental-demo/app/page.js",
                        lineNumber: 97,
                        columnNumber: 86
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$family$2d$dental$2d$demo$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                        children: "Call the clinic"
                    }, void 0, false, {
                        fileName: "[project]/family-dental-demo/app/page.js",
                        lineNumber: 97,
                        columnNumber: 107
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/family-dental-demo/app/page.js",
                lineNumber: 97,
                columnNumber: 5
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$family$2d$dental$2d$demo$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("dialog", {
                ref: dialog,
                className: "inquiry-dialog",
                "aria-labelledby": "inquiry-title",
                onClick: (event)=>{
                    if (event.target === event.currentTarget) dialog.current?.close();
                },
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$family$2d$dental$2d$demo$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "dialog-content",
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$family$2d$dental$2d$demo$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                            className: "dialog-close",
                            "aria-label": "Close appointment inquiry",
                            onClick: ()=>dialog.current?.close(),
                            children: "×"
                        }, void 0, false, {
                            fileName: "[project]/family-dental-demo/app/page.js",
                            lineNumber: 98,
                            columnNumber: 207
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$family$2d$dental$2d$demo$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                            className: "treatment-icon",
                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$family$2d$dental$2d$demo$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(Icon, {
                                name: "chat"
                            }, void 0, false, {
                                fileName: "[project]/family-dental-demo/app/page.js",
                                lineNumber: 98,
                                columnNumber: 362
                            }, this)
                        }, void 0, false, {
                            fileName: "[project]/family-dental-demo/app/page.js",
                            lineNumber: 98,
                            columnNumber: 329
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$family$2d$dental$2d$demo$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                            className: "eyebrow",
                            children: "A first step, at your pace"
                        }, void 0, false, {
                            fileName: "[project]/family-dental-demo/app/page.js",
                            lineNumber: 98,
                            columnNumber: 389
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$family$2d$dental$2d$demo$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h2", {
                            id: "inquiry-title",
                            children: [
                                "Let’s talk about",
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$family$2d$dental$2d$demo$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("br", {}, void 0, false, {
                                    fileName: "[project]/family-dental-demo/app/page.js",
                                    lineNumber: 98,
                                    columnNumber: 481
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$family$2d$dental$2d$demo$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("em", {
                                    children: "your smile."
                                }, void 0, false, {
                                    fileName: "[project]/family-dental-demo/app/page.js",
                                    lineNumber: 98,
                                    columnNumber: 487
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/family-dental-demo/app/page.js",
                            lineNumber: 98,
                            columnNumber: 442
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$family$2d$dental$2d$demo$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                            className: "topic-label",
                            children: [
                                "Interested in: ",
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$family$2d$dental$2d$demo$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("strong", {
                                    children: topic
                                }, void 0, false, {
                                    fileName: "[project]/family-dental-demo/app/page.js",
                                    lineNumber: 98,
                                    columnNumber: 554
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/family-dental-demo/app/page.js",
                            lineNumber: 98,
                            columnNumber: 512
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$family$2d$dental$2d$demo$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                            children: "This is a demonstration inquiry. No request has been sent and no appointment has been booked. Please call Family Dental Clinic to ask about this treatment or arrange a visit."
                        }, void 0, false, {
                            fileName: "[project]/family-dental-demo/app/page.js",
                            lineNumber: 98,
                            columnNumber: 582
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$family$2d$dental$2d$demo$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("a", {
                            className: "button",
                            href: PHONE,
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$family$2d$dental$2d$demo$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(Icon, {
                                    name: "phone"
                                }, void 0, false, {
                                    fileName: "[project]/family-dental-demo/app/page.js",
                                    lineNumber: 98,
                                    columnNumber: 798
                                }, this),
                                " Call +92 320 3771995"
                            ]
                        }, void 0, true, {
                            fileName: "[project]/family-dental-demo/app/page.js",
                            lineNumber: 98,
                            columnNumber: 763
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$family$2d$dental$2d$demo$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("a", {
                            className: "text-link",
                            href: MAP,
                            target: "_blank",
                            rel: "noreferrer",
                            children: [
                                "View clinic directions ",
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$family$2d$dental$2d$demo$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                    children: "↗"
                                }, void 0, false, {
                                    fileName: "[project]/family-dental-demo/app/page.js",
                                    lineNumber: 98,
                                    columnNumber: 936
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/family-dental-demo/app/page.js",
                            lineNumber: 98,
                            columnNumber: 844
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/family-dental-demo/app/page.js",
                    lineNumber: 98,
                    columnNumber: 175
                }, this)
            }, void 0, false, {
                fileName: "[project]/family-dental-demo/app/page.js",
                lineNumber: 98,
                columnNumber: 5
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/family-dental-demo/app/page.js",
        lineNumber: 68,
        columnNumber: 10
    }, this);
}
_s1(Home, "OmqLLYRbnoXmNdala03qA54qLxk=");
_c3 = Home;
var _c, _c1, _c2, _c3;
__turbopack_context__.k.register(_c, "Icon");
__turbopack_context__.k.register(_c1, "Brand");
__turbopack_context__.k.register(_c2, "Photo");
__turbopack_context__.k.register(_c3, "Home");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
]);

//# sourceMappingURL=family-dental-demo_app_page_0kjs7lcitq0g-.js.map