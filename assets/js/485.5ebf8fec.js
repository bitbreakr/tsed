(window.webpackJsonp=window.webpackJsonp||[]).push([[485],{920:function(e,t,s){"use strict";s.r(t);var a=s(0),p=Object(a.a)({},(function(){var e=this,t=e.$createElement,s=e._self._c||t;return s("ContentSlotsDistributor",{attrs:{"slot-key":e.$parent.slotKey}},[s("h1",{attrs:{id:"os3response"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#os3response"}},[e._v("#")]),e._v(" OS3Response "),s("Badge",{attrs:{text:"Interface",type:"interface"}})],1),e._v(" "),s("section",{staticClass:"symbol-info"},[s("table",{staticClass:"is-full-width"},[s("tbody",[s("tr",[s("th",[e._v("Module")]),s("td",[s("div",{staticClass:"lang-typescript"},[s("span",{staticClass:"token keyword"},[e._v("import")]),e._v(" { OS3Response } "),s("span",{staticClass:"token keyword"},[e._v("from")]),e._v(" "),s("span",{staticClass:"token string"},[e._v('"@tsed/openspec"')])])])]),s("tr",[s("th",[e._v("Source")]),s("td",[s("a",{attrs:{href:"https://github.com/TypedProject/tsed/blob/v6.4.1/packages/openspec/src/openspec3/OS3Response.ts#L0-L0"}},[e._v("/packages/openspec/src/openspec3/OS3Response.ts")])])])])])]),e._v(" "),s("h2",{attrs:{id:"overview"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#overview"}},[e._v("#")]),e._v(" Overview")]),e._v(" "),s("div",{staticClass:"language-typescript"},[s("pre",{pre:!0,attrs:{class:"language-typescript"}},[s("code",{pre:!0,attrs:{class:"typescript-lang "}},[s("span",{pre:!0,attrs:{class:"token keyword"}},[e._v("interface")]),e._v(" OS3Response<"),s("a",{pre:!0,attrs:{href:"/api/mongoose/decorators/Schema.html"}},[s("span",{pre:!0,attrs:{class:"token"}},[e._v("Schema")])]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v(" = ")]),s("a",{pre:!0,attrs:{href:"/api/openspec/openspec3/OS3Schema.html"}},[s("span",{pre:!0,attrs:{class:"token"}},[e._v("OS3Schema")])]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v(",")]),e._v(" "),s("a",{pre:!0,attrs:{href:"/api/schema/decorators/operations/Header.html"}},[s("span",{pre:!0,attrs:{class:"token"}},[e._v("Header")])]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v(" = ")]),s("a",{pre:!0,attrs:{href:"/api/openspec/openspec3/OS3Header.html"}},[s("span",{pre:!0,attrs:{class:"token"}},[e._v("OS3Header")])]),e._v("<"),s("a",{pre:!0,attrs:{href:"/api/mongoose/decorators/Schema.html"}},[s("span",{pre:!0,attrs:{class:"token"}},[e._v("Schema")])]),e._v(">> "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v("{")]),e._v("\n    /**\n     * A short description of the response. CommonMark syntax MAY be used for rich text representation.\n     */\n    description"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v(":")]),e._v(" "),s("span",{pre:!0,attrs:{class:"token keyword"}},[e._v("string")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v(";")]),e._v("\n    /**\n     * Maps a header name to its definition. "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v("[")]),e._v("RFC7230"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v("]")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v("(")]),e._v("https"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v(":")]),e._v("//tools.ietf.org/html/rfc7230#page-22"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v(")")]),e._v(' states header names are case insensitive. If a response header is defined with the name "Content-'),s("a",{pre:!0,attrs:{href:"/api/core/interfaces/Type.html"}},[s("span",{pre:!0,attrs:{class:"token"}},[e._v("Type")])]),e._v('"'),s("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v(",")]),e._v(" it SHALL be ignored.\n     */\n    headers?"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v(":")]),e._v(" "),s("a",{pre:!0,attrs:{href:"/api/openspec/common/OpenSpecHash.html"}},[s("span",{pre:!0,attrs:{class:"token"}},[e._v("OpenSpecHash")])]),e._v("<"),s("a",{pre:!0,attrs:{href:"/api/schema/decorators/operations/Header.html"}},[s("span",{pre:!0,attrs:{class:"token"}},[e._v("Header")])]),e._v(">"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v(";")]),e._v("\n    /**\n     * A map containing descriptions of potential response payloads. The key is a media type or "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v("[")]),e._v("media type range"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v("]")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v("(")]),e._v("https"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v(":")]),e._v("//tools.ietf.org/html/rfc7231#appendix-D"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v(")")]),e._v(" and the value describes it. For responses that match multiple keys"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v(",")]),e._v(" only the most specific key is applicable. e.g. text/plain overrides text/*\n     */\n    content?"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v(":")]),e._v(" "),s("a",{pre:!0,attrs:{href:"/api/openspec/common/OpenSpecHash.html"}},[s("span",{pre:!0,attrs:{class:"token"}},[e._v("OpenSpecHash")])]),e._v("<"),s("a",{pre:!0,attrs:{href:"/api/openspec/openspec3/OS3MediaType.html"}},[s("span",{pre:!0,attrs:{class:"token"}},[e._v("OS3MediaType")])]),e._v("<"),s("a",{pre:!0,attrs:{href:"/api/mongoose/decorators/Schema.html"}},[s("span",{pre:!0,attrs:{class:"token"}},[e._v("Schema")])]),e._v(">>"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v(";")]),e._v("\n    /**\n     * A map of operations links that can be followed "),s("span",{pre:!0,attrs:{class:"token keyword"}},[e._v("from")]),e._v(" the response. The key of the map is a short name for the link"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v(",")]),e._v(" following the naming constraints of the names for "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v("[")]),e._v("Component Objects"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v("]")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v("(")]),e._v("https"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v(":")]),e._v("//github.com/OAI/OpenAPI-Specification/blob/master/versions/3.0.1.md#componentsObject"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v(")")]),e._v(".\n     */\n    links?"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v(":")]),e._v(" "),s("a",{pre:!0,attrs:{href:"/api/openspec/common/OpenSpecHash.html"}},[s("span",{pre:!0,attrs:{class:"token"}},[e._v("OpenSpecHash")])]),e._v("<"),s("a",{pre:!0,attrs:{href:"/api/openspec/openspec3/OS3Link.html"}},[s("span",{pre:!0,attrs:{class:"token"}},[e._v("OS3Link")])]),e._v(" | "),s("a",{pre:!0,attrs:{href:"/api/openspec/common/OpenSpecRef.html"}},[s("span",{pre:!0,attrs:{class:"token"}},[e._v("OpenSpecRef")])]),e._v(">"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v(";")]),e._v("\n"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v("}")])])])]),e._v(" "),s("h2",{attrs:{id:"members"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#members"}},[e._v("#")]),e._v(" Members")]),e._v(" "),s("div",{pre:!0},[s("div",{pre:!0,attrs:{class:"method-overview"}},[s("div",{pre:!0,attrs:{class:"language-typescript"}},[s("pre",{pre:!0,attrs:{class:"language-typescript","v-pre":""}},[s("code",{pre:!0,attrs:{class:"typescript-lang "}},[e._v("description"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v(":")]),e._v(" "),s("span",{pre:!0,attrs:{class:"token keyword"}},[e._v("string")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v(";")])])])])]),e._v(" "),s("p",[e._v("A short description of the response. CommonMark syntax MAY be used for rich text representation.")])]),s("hr"),e._v(" "),s("div",{pre:!0},[s("div",{pre:!0,attrs:{class:"method-overview"}},[s("div",{pre:!0,attrs:{class:"language-typescript"}},[s("pre",{pre:!0,attrs:{class:"language-typescript","v-pre":""}},[s("code",{pre:!0,attrs:{class:"typescript-lang "}},[e._v("headers?"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v(":")]),e._v(" "),s("a",{pre:!0,attrs:{href:"/api/openspec/common/OpenSpecHash.html"}},[s("span",{pre:!0,attrs:{class:"token"}},[e._v("OpenSpecHash")])]),e._v("<"),s("a",{pre:!0,attrs:{href:"/api/schema/decorators/operations/Header.html"}},[s("span",{pre:!0,attrs:{class:"token"}},[e._v("Header")])]),e._v(">"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v(";")])])])])]),e._v(" "),s("p",[e._v("Maps a header name to its definition. "),s("a",{pre:!0,attrs:{href:"https://tools.ietf.org/html/rfc7230#page-22",target:"_blank",rel:"noopener noreferrer"}},[e._v("RFC7230"),s("OutboundLink",{pre:!0})],1),e._v(' states header names are case insensitive. If a response header is defined with the name "Content-Type", it SHALL be ignored.')])]),s("hr"),e._v(" "),s("div",{pre:!0},[s("div",{pre:!0,attrs:{class:"method-overview"}},[s("div",{pre:!0,attrs:{class:"language-typescript"}},[s("pre",{pre:!0,attrs:{class:"language-typescript","v-pre":""}},[s("code",{pre:!0,attrs:{class:"typescript-lang "}},[e._v("content?"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v(":")]),e._v(" "),s("a",{pre:!0,attrs:{href:"/api/openspec/common/OpenSpecHash.html"}},[s("span",{pre:!0,attrs:{class:"token"}},[e._v("OpenSpecHash")])]),e._v("<"),s("a",{pre:!0,attrs:{href:"/api/openspec/openspec3/OS3MediaType.html"}},[s("span",{pre:!0,attrs:{class:"token"}},[e._v("OS3MediaType")])]),e._v("<"),s("a",{pre:!0,attrs:{href:"/api/mongoose/decorators/Schema.html"}},[s("span",{pre:!0,attrs:{class:"token"}},[e._v("Schema")])]),e._v(">>"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v(";")])])])])]),e._v(" "),s("p",[e._v("A map containing descriptions of potential response payloads. The key is a media type or "),s("a",{pre:!0,attrs:{href:"https://tools.ietf.org/html/rfc7231#appendix-D",target:"_blank",rel:"noopener noreferrer"}},[e._v("media type range"),s("OutboundLink",{pre:!0})],1),e._v(" and the value describes it. For responses that match multiple keys, only the most specific key is applicable. e.g. text/plain overrides text/*")])]),s("hr"),e._v(" "),s("div",{pre:!0},[s("div",{pre:!0,attrs:{class:"method-overview"}},[s("div",{pre:!0,attrs:{class:"language-typescript"}},[s("pre",{pre:!0,attrs:{class:"language-typescript","v-pre":""}},[s("code",{pre:!0,attrs:{class:"typescript-lang "}},[e._v("links?"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v(":")]),e._v(" "),s("a",{pre:!0,attrs:{href:"/api/openspec/common/OpenSpecHash.html"}},[s("span",{pre:!0,attrs:{class:"token"}},[e._v("OpenSpecHash")])]),e._v("<"),s("a",{pre:!0,attrs:{href:"/api/openspec/openspec3/OS3Link.html"}},[s("span",{pre:!0,attrs:{class:"token"}},[e._v("OS3Link")])]),e._v(" | "),s("a",{pre:!0,attrs:{href:"/api/openspec/common/OpenSpecRef.html"}},[s("span",{pre:!0,attrs:{class:"token"}},[e._v("OpenSpecRef")])]),e._v(">"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v(";")])])])])]),e._v(" "),s("p",[e._v("A map of operations links that can be followed from the response. The key of the map is a short name for the link, following the naming constraints of the names for "),s("a",{pre:!0,attrs:{href:"https://github.com/OAI/OpenAPI-Specification/blob/master/versions/3.0.1.md#componentsObject",target:"_blank",rel:"noopener noreferrer"}},[e._v("Component Objects"),s("OutboundLink",{pre:!0})],1),e._v(".")])])])}),[],!1,null,null,null);t.default=p.exports}}]);