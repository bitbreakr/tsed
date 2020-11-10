(window.webpackJsonp=window.webpackJsonp||[]).push([[483],{918:function(t,e,a){"use strict";a.r(e);var s=a(0),r=Object(s.a)({},(function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[a("h1",{attrs:{id:"os3paths"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#os3paths"}},[t._v("#")]),t._v(" OS3Paths "),a("Badge",{attrs:{text:"Interface",type:"interface"}})],1),t._v(" "),a("section",{staticClass:"symbol-info"},[a("table",{staticClass:"is-full-width"},[a("tbody",[a("tr",[a("th",[t._v("Module")]),a("td",[a("div",{staticClass:"lang-typescript"},[a("span",{staticClass:"token keyword"},[t._v("import")]),t._v(" { OS3Paths } "),a("span",{staticClass:"token keyword"},[t._v("from")]),t._v(" "),a("span",{staticClass:"token string"},[t._v('"@tsed/openspec"')])])])]),a("tr",[a("th",[t._v("Source")]),a("td",[a("a",{attrs:{href:"https://github.com/TypedProject/tsed/blob/v6.4.1/packages/openspec/src/openspec3/OS3Paths.ts#L0-L0"}},[t._v("/packages/openspec/src/openspec3/OS3Paths.ts")])])])])])]),t._v(" "),a("h2",{attrs:{id:"overview"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#overview"}},[t._v("#")]),t._v(" Overview")]),t._v(" "),a("div",{staticClass:"language-typescript"},[a("pre",{pre:!0,attrs:{class:"language-typescript"}},[a("code",{pre:!0,attrs:{class:"typescript-lang "}},[a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("interface")]),t._v(" OS3Paths<"),a("a",{pre:!0,attrs:{href:"/api/mongoose/decorators/Schema.html"}},[a("span",{pre:!0,attrs:{class:"token"}},[t._v("Schema")])]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(" = ")]),a("a",{pre:!0,attrs:{href:"/api/openspec/openspec3/OS3Schema.html"}},[a("span",{pre:!0,attrs:{class:"token"}},[t._v("OS3Schema")])]),t._v("> "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("extends")]),t._v(" "),a("a",{pre:!0,attrs:{href:"/api/openspec/common/OpenSpecPath.html"}},[a("span",{pre:!0,attrs:{class:"token"}},[t._v("OpenSpecPath")])]),t._v("<"),a("a",{pre:!0,attrs:{href:"/api/openspec/openspec3/OS3Operation.html"}},[a("span",{pre:!0,attrs:{class:"token"}},[t._v("OS3Operation")])]),t._v("<"),a("a",{pre:!0,attrs:{href:"/api/mongoose/decorators/Schema.html"}},[a("span",{pre:!0,attrs:{class:"token"}},[t._v("Schema")])]),t._v(">> "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n    /**\n     * An optional"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("string")]),t._v(" summary"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" intended to apply to all operations in this path.\n     */\n    summary?"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("string")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n    /**\n     * An optional"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("string")]),t._v(" description"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" intended to apply to all operations in this path. CommonMark syntax MAY be used for rich text representation.\n     */\n    description?"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("string")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n    /**\n     * A definition of a TRACE operation on this path.\n     */\n    trace?"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),a("a",{pre:!0,attrs:{href:"/api/openspec/openspec3/OS3Operation.html"}},[a("span",{pre:!0,attrs:{class:"token"}},[t._v("OS3Operation")])]),t._v("<"),a("a",{pre:!0,attrs:{href:"/api/mongoose/decorators/Schema.html"}},[a("span",{pre:!0,attrs:{class:"token"}},[t._v("Schema")])]),t._v(">"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n    /**\n     * An alternative server array to service all operations in this path.\n     */\n    servers?"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),a("a",{pre:!0,attrs:{href:"/api/openspec/openspec3/OS3Server.html"}},[a("span",{pre:!0,attrs:{class:"token"}},[t._v("OS3Server")])]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n    /**\n     * A list of parameters that are applicable for all the operations described under this path. These parameters can be overridden at the operation level"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" but cannot be removed there. The list MUST NOT include duplicated parameters. A unique parameter is defined by a combination of a name and location. The list can use the Reference Object to link to parameters that are defined at the OpenAPI Object's components/parameters.\n     */\n    parameters?"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("a",{pre:!0,attrs:{href:"/api/openspec/openspec3/OS3Parameter.html"}},[a("span",{pre:!0,attrs:{class:"token"}},[t._v("OS3Parameter")])]),t._v("<"),a("a",{pre:!0,attrs:{href:"/api/mongoose/decorators/Schema.html"}},[a("span",{pre:!0,attrs:{class:"token"}},[t._v("Schema")])]),t._v("> | "),a("a",{pre:!0,attrs:{href:"/api/openspec/common/OpenSpecRef.html"}},[a("span",{pre:!0,attrs:{class:"token"}},[t._v("OpenSpecRef")])]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")])])])]),t._v(" "),a("h2",{attrs:{id:"members"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#members"}},[t._v("#")]),t._v(" Members")]),t._v(" "),a("div",{pre:!0},[a("div",{pre:!0,attrs:{class:"method-overview"}},[a("div",{pre:!0,attrs:{class:"language-typescript"}},[a("pre",{pre:!0,attrs:{class:"language-typescript","v-pre":""}},[a("code",{pre:!0,attrs:{class:"typescript-lang "}},[t._v("summary?"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("string")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")])])])])]),t._v(" "),a("p",[t._v("An optional, string summary, intended to apply to all operations in this path.")])]),a("hr"),t._v(" "),a("div",{pre:!0},[a("div",{pre:!0,attrs:{class:"method-overview"}},[a("div",{pre:!0,attrs:{class:"language-typescript"}},[a("pre",{pre:!0,attrs:{class:"language-typescript","v-pre":""}},[a("code",{pre:!0,attrs:{class:"typescript-lang "}},[t._v("description?"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("string")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")])])])])]),t._v(" "),a("p",[t._v("An optional, string description, intended to apply to all operations in this path. CommonMark syntax MAY be used for rich text representation.")])]),a("hr"),t._v(" "),a("div",{pre:!0},[a("div",{pre:!0,attrs:{class:"method-overview"}},[a("div",{pre:!0,attrs:{class:"language-typescript"}},[a("pre",{pre:!0,attrs:{class:"language-typescript","v-pre":""}},[a("code",{pre:!0,attrs:{class:"typescript-lang "}},[t._v("trace?"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),a("a",{pre:!0,attrs:{href:"/api/openspec/openspec3/OS3Operation.html"}},[a("span",{pre:!0,attrs:{class:"token"}},[t._v("OS3Operation")])]),t._v("<"),a("a",{pre:!0,attrs:{href:"/api/mongoose/decorators/Schema.html"}},[a("span",{pre:!0,attrs:{class:"token"}},[t._v("Schema")])]),t._v(">"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")])])])])]),t._v(" "),a("p",[t._v("A definition of a TRACE operation on this path.")])]),a("hr"),t._v(" "),a("div",{pre:!0},[a("div",{pre:!0,attrs:{class:"method-overview"}},[a("div",{pre:!0,attrs:{class:"language-typescript"}},[a("pre",{pre:!0,attrs:{class:"language-typescript","v-pre":""}},[a("code",{pre:!0,attrs:{class:"typescript-lang "}},[t._v("servers?"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),a("a",{pre:!0,attrs:{href:"/api/openspec/openspec3/OS3Server.html"}},[a("span",{pre:!0,attrs:{class:"token"}},[t._v("OS3Server")])]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")])])])])]),t._v(" "),a("p",[t._v("An alternative server array to service all operations in this path.")])]),a("hr"),t._v(" "),a("div",{pre:!0},[a("div",{pre:!0,attrs:{class:"method-overview"}},[a("div",{pre:!0,attrs:{class:"language-typescript"}},[a("pre",{pre:!0,attrs:{class:"language-typescript","v-pre":""}},[a("code",{pre:!0,attrs:{class:"typescript-lang "}},[t._v("parameters?"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("a",{pre:!0,attrs:{href:"/api/openspec/openspec3/OS3Parameter.html"}},[a("span",{pre:!0,attrs:{class:"token"}},[t._v("OS3Parameter")])]),t._v("<"),a("a",{pre:!0,attrs:{href:"/api/mongoose/decorators/Schema.html"}},[a("span",{pre:!0,attrs:{class:"token"}},[t._v("Schema")])]),t._v("> | "),a("a",{pre:!0,attrs:{href:"/api/openspec/common/OpenSpecRef.html"}},[a("span",{pre:!0,attrs:{class:"token"}},[t._v("OpenSpecRef")])]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")])])])])]),t._v(" "),a("p",[t._v("A list of parameters that are applicable for all the operations described under this path. These parameters can be overridden at the operation level, but cannot be removed there. The list MUST NOT include duplicated parameters. A unique parameter is defined by a combination of a name and location. The list can use the Reference Object to link to parameters that are defined at the OpenAPI Object's components/parameters.")])])])}),[],!1,null,null,null);e.default=r.exports}}]);