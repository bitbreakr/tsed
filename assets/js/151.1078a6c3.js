(window.webpackJsonp=window.webpackJsonp||[]).push([[151],{585:function(t,s,a){"use strict";a.r(s);var e=a(0),n=Object(e.a)({},(function(){var t=this,s=t.$createElement,a=t._self._c||s;return a("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[a("h1",{attrs:{id:"platformcontext"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#platformcontext"}},[t._v("#")]),t._v(" PlatformContext "),a("Badge",{attrs:{text:"Class",type:"class"}})],1),t._v(" "),a("section",{staticClass:"symbol-info"},[a("table",{staticClass:"is-full-width"},[a("tbody",[a("tr",[a("th",[t._v("Module")]),a("td",[a("div",{staticClass:"lang-typescript"},[a("span",{staticClass:"token keyword"},[t._v("import")]),t._v(" { PlatformContext } "),a("span",{staticClass:"token keyword"},[t._v("from")]),t._v(" "),a("span",{staticClass:"token string"},[t._v('"@tsed/common"')])])])]),a("tr",[a("th",[t._v("Source")]),a("td",[a("a",{attrs:{href:"https://github.com/TypedProject/tsed/blob/v6.4.1/packages/common/src/platform/domain/PlatformContext.ts#L0-L0"}},[t._v("/packages/common/src/platform/domain/PlatformContext.ts")])])])])])]),t._v(" "),a("h2",{attrs:{id:"overview"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#overview"}},[t._v("#")]),t._v(" Overview")]),t._v(" "),a("div",{staticClass:"language-typescript"},[a("pre",{pre:!0,attrs:{class:"language-typescript"}},[a("code",{pre:!0,attrs:{class:"typescript-lang "}},[a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("class")]),t._v(" PlatformContext "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("extends")]),t._v(" Map<"),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("any")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("any")]),t._v("> "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n    /**\n     * "),a("a",{pre:!0,attrs:{href:"/api/common/mvc/decorators/params/Request.html"}},[a("span",{pre:!0,attrs:{class:"token"}},[t._v("Request")])]),t._v(" id generated by @@contextMiddleware@@.\n     *\n     * "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" tip\n     * By default Ts.ED generate uuid like that `"),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("uuidv4")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("."),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("replace")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("/-/gi"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(' ""'),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("`.\n     * Dash are removed to simplify tracking logs in Kibana\n     * "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v("\n     *\n     * "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" tip\n     * "),a("a",{pre:!0,attrs:{href:"/api/common/mvc/decorators/params/Request.html"}},[a("span",{pre:!0,attrs:{class:"token"}},[t._v("Request")])]),t._v(" id can by customized by changing the server configuration.\n     *\n     * ```typescript\n     * @"),a("span",{pre:!0,attrs:{class:"token function"}},[a("a",{pre:!0,attrs:{href:"/api/di/decorators/Configuration.html"}},[a("span",{pre:!0,attrs:{class:"token"}},[t._v("Configuration")])])]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n     *   logger"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n     *     reqIdBuilder"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" createUniqId // give your own id generator function\n     *   "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n     * "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n     * "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("class")]),t._v(" Server "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n     *\n     * "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n     * ```\n     * "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v("\n     *\n     */\n    "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("readonly")]),t._v(" id"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("string")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n    /**\n     * "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("Date")]),t._v(" when request have been handled by the server. @@"),a("a",{pre:!0,attrs:{href:"/api/common/platform/domain/RequestLogger.html"}},[a("span",{pre:!0,attrs:{class:"token"}},[t._v("RequestLogger")])]),t._v("@@ use this date to log request duration.\n     */\n    "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("readonly")]),t._v(" dateStart"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("Date")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n    /**\n     * The request container used by the Ts.ED DI. It contain all services annotated with `@"),a("span",{pre:!0,attrs:{class:"token function"}},[a("a",{pre:!0,attrs:{href:"/api/di/decorators/Scope.html"}},[a("span",{pre:!0,attrs:{class:"token"}},[t._v("Scope")])])]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("a",{pre:!0,attrs:{href:"/api/di/interfaces/ProviderScope.html"}},[a("span",{pre:!0,attrs:{class:"token"}},[t._v("ProviderScope")])]),t._v(".REQUEST"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("`\n     */\n    container"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),a("a",{pre:!0,attrs:{href:"/api/di/class/LocalsContainer.html"}},[a("span",{pre:!0,attrs:{class:"token"}},[t._v("LocalsContainer")])]),t._v("<"),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("any")]),t._v(">"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n    /**\n     * The current @@"),a("a",{pre:!0,attrs:{href:"/api/common/mvc/models/EndpointMetadata.html"}},[a("span",{pre:!0,attrs:{class:"token"}},[t._v("EndpointMetadata")])]),t._v("@@ resolved by Ts.ED during the request.\n     */\n    endpoint"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),a("a",{pre:!0,attrs:{href:"/api/common/mvc/models/EndpointMetadata.html"}},[a("span",{pre:!0,attrs:{class:"token"}},[t._v("EndpointMetadata")])]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n    /**\n     * The data return by the previous endpoint if you use multiple handler on the same route. By default data is empty.\n     */\n    data"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("any")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n    /**\n     * Logger attached to the context request.\n     */\n    logger"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),a("a",{pre:!0,attrs:{href:"/api/common/platform/domain/RequestLogger.html"}},[a("span",{pre:!0,attrs:{class:"token"}},[t._v("RequestLogger")])]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n    /**\n     * The current @@"),a("a",{pre:!0,attrs:{href:"/api/common/platform/services/PlatformResponse.html"}},[a("span",{pre:!0,attrs:{class:"token"}},[t._v("PlatformResponse")])]),t._v("@@.\n     */\n    response"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),a("a",{pre:!0,attrs:{href:"/api/common/platform/services/PlatformResponse.html"}},[a("span",{pre:!0,attrs:{class:"token"}},[t._v("PlatformResponse")])]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n    /**\n     * The current @@"),a("a",{pre:!0,attrs:{href:"/api/common/platform/services/PlatformRequest.html"}},[a("span",{pre:!0,attrs:{class:"token"}},[t._v("PlatformRequest")])]),t._v("@@.\n     */\n    request"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),a("a",{pre:!0,attrs:{href:"/api/common/platform/services/PlatformRequest.html"}},[a("span",{pre:!0,attrs:{class:"token"}},[t._v("PlatformRequest")])]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n    /**\n     *\n     */\n    injector"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),a("a",{pre:!0,attrs:{href:"/api/di/services/InjectorService.html"}},[a("span",{pre:!0,attrs:{class:"token"}},[t._v("InjectorService")])]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("constructor")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v(" id"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" injector"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" logger"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" response"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" request"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" endpoint"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" ...options "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),a("a",{pre:!0,attrs:{href:"/api/common/platform/domain/RequestContextOptions.html"}},[a("span",{pre:!0,attrs:{class:"token"}},[t._v("RequestContextOptions")])]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n    get "),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("env")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("import")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v('"@tsed/core"'),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("."),a("a",{pre:!0,attrs:{href:"/api/core/interfaces/Env.html"}},[a("span",{pre:!0,attrs:{class:"token"}},[t._v("Env")])]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n    get "),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("app")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),a("a",{pre:!0,attrs:{href:"/api/common/platform/services/PlatformApplication.html"}},[a("span",{pre:!0,attrs:{class:"token"}},[t._v("PlatformApplication")])]),t._v("<TsED.Application"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" TsED.Router>"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("destroy")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" Promise<"),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("void")]),t._v(">"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("isDone")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("boolean")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("emit")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("eventName"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("string")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" ...args"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("any")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" Promise<"),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("void")]),t._v(">"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n    /**\n     * Return the framework request instance "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("Express"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" Koa"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" etc..."),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n     */\n    getRequest<"),a("a",{pre:!0,attrs:{href:"/api/common/mvc/decorators/params/Req.html"}},[a("span",{pre:!0,attrs:{class:"token"}},[t._v("Req")])]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(" = ")]),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("any")]),t._v(">"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),a("a",{pre:!0,attrs:{href:"/api/common/mvc/decorators/params/Req.html"}},[a("span",{pre:!0,attrs:{class:"token"}},[t._v("Req")])]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n    /**\n     * Return the framework response instance "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("Express"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" Koa"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" etc..."),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n     */\n    getResponse<"),a("a",{pre:!0,attrs:{href:"/api/common/mvc/decorators/params/Res.html"}},[a("span",{pre:!0,attrs:{class:"token"}},[t._v("Res")])]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(" = ")]),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("any")]),t._v(">"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),a("a",{pre:!0,attrs:{href:"/api/common/mvc/decorators/params/Res.html"}},[a("span",{pre:!0,attrs:{class:"token"}},[t._v("Res")])]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n    /**\n     * "),a("a",{pre:!0,attrs:{href:"/api/common/mvc/decorators/method/Get.html"}},[a("span",{pre:!0,attrs:{class:"token"}},[t._v("Get")])]),t._v(" Node.js request\n     */\n    "),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("getReq")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" IncomingMessage"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n    /**\n     * "),a("a",{pre:!0,attrs:{href:"/api/common/mvc/decorators/method/Get.html"}},[a("span",{pre:!0,attrs:{class:"token"}},[t._v("Get")])]),t._v(" Node.js response\n     */\n    "),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("getRes")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" ServerResponse"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n    /**\n     * Return the original application instance.\n     */\n    getApp<T"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(" = ")]),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("any")]),t._v(">"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" T"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")])])])]),t._v(" "),a("h2",{attrs:{id:"members"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#members"}},[t._v("#")]),t._v(" Members")]),t._v(" "),a("div",{pre:!0},[a("div",{pre:!0,attrs:{class:"method-overview"}},[a("div",{pre:!0,attrs:{class:"language-typescript"}},[a("pre",{pre:!0,attrs:{class:"language-typescript","v-pre":""}},[a("code",{pre:!0,attrs:{class:"typescript-lang "}},[a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("readonly")]),t._v(" id"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("string")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")])])])])]),t._v(" "),a("p",[t._v("Request id generated by "),a("ApiSymbolName",{pre:!0},[t._v("contextMiddleware")]),t._v(".")],1),t._v(" "),a("div",{pre:!0,attrs:{class:"custom-block tip"}},[a("p",{pre:!0,attrs:{class:"custom-block-title"}},[t._v("TIP")]),t._v(" "),a("p",[t._v("By default Ts.ED generate uuid like that "),a("code",[t._v('uuidv4().replace(/-/gi, ""))')]),t._v(".\nDash are removed to simplify tracking logs in Kibana")])])]),a("div",{staticClass:"custom-block tip"},[a("p",{staticClass:"custom-block-title"},[t._v("TIP")]),t._v(" "),a("p",[t._v("Request id can by customized by changing the server configuration.")]),t._v(" "),a("div",{staticClass:"language-typescript line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-typescript"}},[a("code",[t._v("@"),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("Configuration")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n  logger"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n    reqIdBuilder"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" createUniqId "),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// give your own id generator function")]),t._v("\n  "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("class")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("Server")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n")])]),t._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[t._v("1")]),a("br"),a("span",{staticClass:"line-number"},[t._v("2")]),a("br"),a("span",{staticClass:"line-number"},[t._v("3")]),a("br"),a("span",{staticClass:"line-number"},[t._v("4")]),a("br"),a("span",{staticClass:"line-number"},[t._v("5")]),a("br"),a("span",{staticClass:"line-number"},[t._v("6")]),a("br"),a("span",{staticClass:"line-number"},[t._v("7")]),a("br"),a("span",{staticClass:"line-number"},[t._v("8")]),a("br")])])]),t._v(" "),a("p",[t._v(":::")]),t._v(" "),a("hr"),t._v(" "),a("div",{pre:!0},[a("div",{pre:!0,attrs:{class:"method-overview"}},[a("div",{pre:!0,attrs:{class:"language-typescript"}},[a("pre",{pre:!0,attrs:{class:"language-typescript","v-pre":""}},[a("code",{pre:!0,attrs:{class:"typescript-lang "}},[a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("readonly")]),t._v(" dateStart"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("Date")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")])])])])]),t._v(" "),a("p",[t._v("Date when request have been handled by the server. "),a("ApiSymbolName",{pre:!0},[t._v("RequestLogger")]),t._v(" use this date to log request duration.")],1)]),a("hr"),t._v(" "),a("div",{pre:!0},[a("div",{pre:!0,attrs:{class:"method-overview"}},[a("div",{pre:!0,attrs:{class:"language-typescript"}},[a("pre",{pre:!0,attrs:{class:"language-typescript","v-pre":""}},[a("code",{pre:!0,attrs:{class:"typescript-lang "}},[t._v("container"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),a("a",{pre:!0,attrs:{href:"/api/di/class/LocalsContainer.html"}},[a("span",{pre:!0,attrs:{class:"token"}},[t._v("LocalsContainer")])]),t._v("<"),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("any")]),t._v(">"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")])])])])]),t._v(" "),a("p",[t._v("The request container used by the Ts.ED DI. It contain all services annotated with "),a("code",[t._v("@Scope(ProviderScope.REQUEST)")])])]),a("hr"),t._v(" "),a("div",{pre:!0},[a("div",{pre:!0,attrs:{class:"method-overview"}},[a("div",{pre:!0,attrs:{class:"language-typescript"}},[a("pre",{pre:!0,attrs:{class:"language-typescript","v-pre":""}},[a("code",{pre:!0,attrs:{class:"typescript-lang "}},[t._v("endpoint"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),a("a",{pre:!0,attrs:{href:"/api/common/mvc/models/EndpointMetadata.html"}},[a("span",{pre:!0,attrs:{class:"token"}},[t._v("EndpointMetadata")])]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")])])])])]),t._v(" "),a("p",[t._v("The current "),a("ApiSymbolName",{pre:!0},[t._v("EndpointMetadata")]),t._v(" resolved by Ts.ED during the request.")],1)]),a("hr"),t._v(" "),a("div",{pre:!0},[a("div",{pre:!0,attrs:{class:"method-overview"}},[a("div",{pre:!0,attrs:{class:"language-typescript"}},[a("pre",{pre:!0,attrs:{class:"language-typescript","v-pre":""}},[a("code",{pre:!0,attrs:{class:"typescript-lang "}},[t._v("data"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("any")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")])])])])]),t._v(" "),a("p",[t._v("The data return by the previous endpoint if you use multiple handler on the same route. By default data is empty.")])]),a("hr"),t._v(" "),a("div",{pre:!0},[a("div",{pre:!0,attrs:{class:"method-overview"}},[a("div",{pre:!0,attrs:{class:"language-typescript"}},[a("pre",{pre:!0,attrs:{class:"language-typescript","v-pre":""}},[a("code",{pre:!0,attrs:{class:"typescript-lang "}},[t._v("logger"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),a("a",{pre:!0,attrs:{href:"/api/common/platform/domain/RequestLogger.html"}},[a("span",{pre:!0,attrs:{class:"token"}},[t._v("RequestLogger")])]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")])])])])]),t._v(" "),a("p",[t._v("Logger attached to the context request.")])]),a("hr"),t._v(" "),a("div",{pre:!0},[a("div",{pre:!0,attrs:{class:"method-overview"}},[a("div",{pre:!0,attrs:{class:"language-typescript"}},[a("pre",{pre:!0,attrs:{class:"language-typescript","v-pre":""}},[a("code",{pre:!0,attrs:{class:"typescript-lang "}},[t._v("response"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),a("a",{pre:!0,attrs:{href:"/api/common/platform/services/PlatformResponse.html"}},[a("span",{pre:!0,attrs:{class:"token"}},[t._v("PlatformResponse")])]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")])])])])]),t._v(" "),a("p",[t._v("The current "),a("ApiSymbolName",{pre:!0},[t._v("PlatformResponse")]),t._v(".")],1)]),a("hr"),t._v(" "),a("div",{pre:!0},[a("div",{pre:!0,attrs:{class:"method-overview"}},[a("div",{pre:!0,attrs:{class:"language-typescript"}},[a("pre",{pre:!0,attrs:{class:"language-typescript","v-pre":""}},[a("code",{pre:!0,attrs:{class:"typescript-lang "}},[t._v("request"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),a("a",{pre:!0,attrs:{href:"/api/common/platform/services/PlatformRequest.html"}},[a("span",{pre:!0,attrs:{class:"token"}},[t._v("PlatformRequest")])]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")])])])])]),t._v(" "),a("p",[t._v("The current "),a("ApiSymbolName",{pre:!0},[t._v("PlatformRequest")]),t._v(".")],1)]),a("hr"),t._v(" "),a("div",{pre:!0},[a("div",{pre:!0,attrs:{class:"method-overview"}},[a("div",{pre:!0,attrs:{class:"language-typescript"}},[a("pre",{pre:!0,attrs:{class:"language-typescript","v-pre":""}},[a("code",{pre:!0,attrs:{class:"typescript-lang "}},[t._v("injector"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),a("a",{pre:!0,attrs:{href:"/api/di/services/InjectorService.html"}},[a("span",{pre:!0,attrs:{class:"token"}},[t._v("InjectorService")])]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")])])])])])]),a("hr"),t._v(" "),a("div",{pre:!0},[a("div",{pre:!0,attrs:{class:"method-overview"}},[a("div",{pre:!0,attrs:{class:"language-typescript"}},[a("pre",{pre:!0,attrs:{class:"language-typescript","v-pre":""}},[a("code",{pre:!0,attrs:{class:"typescript-lang "}},[t._v("get "),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("env")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("import")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v('"@tsed/core"'),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("."),a("a",{pre:!0,attrs:{href:"/api/core/interfaces/Env.html"}},[a("span",{pre:!0,attrs:{class:"token"}},[t._v("Env")])]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")])])])])])]),a("hr"),t._v(" "),a("div",{pre:!0},[a("div",{pre:!0,attrs:{class:"method-overview"}},[a("div",{pre:!0,attrs:{class:"language-typescript"}},[a("pre",{pre:!0,attrs:{class:"language-typescript","v-pre":""}},[a("code",{pre:!0,attrs:{class:"typescript-lang "}},[t._v("get "),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("app")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),a("a",{pre:!0,attrs:{href:"/api/common/platform/services/PlatformApplication.html"}},[a("span",{pre:!0,attrs:{class:"token"}},[t._v("PlatformApplication")])]),t._v("<TsED.Application"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" TsED.Router>"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")])])])])])]),a("hr"),t._v(" "),a("div",{pre:!0},[a("div",{pre:!0,attrs:{class:"method-overview"}},[a("div",{pre:!0,attrs:{class:"language-typescript"}},[a("pre",{pre:!0,attrs:{class:"language-typescript","v-pre":""}},[a("code",{pre:!0,attrs:{class:"typescript-lang "}},[a("span",{pre:!0,attrs:{class:"token function"}},[t._v("destroy")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" Promise<"),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("void")]),t._v(">"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")])])])])])]),a("hr"),t._v(" "),a("div",{pre:!0},[a("div",{pre:!0,attrs:{class:"method-overview"}},[a("div",{pre:!0,attrs:{class:"language-typescript"}},[a("pre",{pre:!0,attrs:{class:"language-typescript","v-pre":""}},[a("code",{pre:!0,attrs:{class:"typescript-lang "}},[a("span",{pre:!0,attrs:{class:"token function"}},[t._v("isDone")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("boolean")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")])])])])])]),a("hr"),t._v(" "),a("div",{pre:!0},[a("div",{pre:!0,attrs:{class:"method-overview"}},[a("div",{pre:!0,attrs:{class:"language-typescript"}},[a("pre",{pre:!0,attrs:{class:"language-typescript","v-pre":""}},[a("code",{pre:!0,attrs:{class:"typescript-lang "}},[a("span",{pre:!0,attrs:{class:"token function"}},[t._v("emit")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("eventName"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("string")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" ...args"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("any")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" Promise<"),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("void")]),t._v(">"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")])])])])])]),a("hr"),t._v(" "),a("div",{pre:!0},[a("div",{pre:!0,attrs:{class:"method-overview"}},[a("div",{pre:!0,attrs:{class:"language-typescript"}},[a("pre",{pre:!0,attrs:{class:"language-typescript","v-pre":""}},[a("code",{pre:!0,attrs:{class:"typescript-lang "}},[t._v("getRequest<"),a("a",{pre:!0,attrs:{href:"/api/common/mvc/decorators/params/Req.html"}},[a("span",{pre:!0,attrs:{class:"token"}},[t._v("Req")])]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(" = ")]),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("any")]),t._v(">"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),a("a",{pre:!0,attrs:{href:"/api/common/mvc/decorators/params/Req.html"}},[a("span",{pre:!0,attrs:{class:"token"}},[t._v("Req")])]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")])])])])]),t._v(" "),a("p",[t._v("Return the framework request instance (Express, Koa, etc...)")])]),a("hr"),t._v(" "),a("div",{pre:!0},[a("div",{pre:!0,attrs:{class:"method-overview"}},[a("div",{pre:!0,attrs:{class:"language-typescript"}},[a("pre",{pre:!0,attrs:{class:"language-typescript","v-pre":""}},[a("code",{pre:!0,attrs:{class:"typescript-lang "}},[t._v("getResponse<"),a("a",{pre:!0,attrs:{href:"/api/common/mvc/decorators/params/Res.html"}},[a("span",{pre:!0,attrs:{class:"token"}},[t._v("Res")])]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(" = ")]),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("any")]),t._v(">"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),a("a",{pre:!0,attrs:{href:"/api/common/mvc/decorators/params/Res.html"}},[a("span",{pre:!0,attrs:{class:"token"}},[t._v("Res")])]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")])])])])]),t._v(" "),a("p",[t._v("Return the framework response instance (Express, Koa, etc...)")])]),a("hr"),t._v(" "),a("div",{pre:!0},[a("div",{pre:!0,attrs:{class:"method-overview"}},[a("div",{pre:!0,attrs:{class:"language-typescript"}},[a("pre",{pre:!0,attrs:{class:"language-typescript","v-pre":""}},[a("code",{pre:!0,attrs:{class:"typescript-lang "}},[a("span",{pre:!0,attrs:{class:"token function"}},[t._v("getReq")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" IncomingMessage"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")])])])])]),t._v(" "),a("p",[t._v("Get Node.js request")])]),a("hr"),t._v(" "),a("div",{pre:!0},[a("div",{pre:!0,attrs:{class:"method-overview"}},[a("div",{pre:!0,attrs:{class:"language-typescript"}},[a("pre",{pre:!0,attrs:{class:"language-typescript","v-pre":""}},[a("code",{pre:!0,attrs:{class:"typescript-lang "}},[a("span",{pre:!0,attrs:{class:"token function"}},[t._v("getRes")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" ServerResponse"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")])])])])]),t._v(" "),a("p",[t._v("Get Node.js response")])]),a("hr"),t._v(" "),a("div",{pre:!0},[a("div",{pre:!0,attrs:{class:"method-overview"}},[a("div",{pre:!0,attrs:{class:"language-typescript"}},[a("pre",{pre:!0,attrs:{class:"language-typescript","v-pre":""}},[a("code",{pre:!0,attrs:{class:"typescript-lang "}},[t._v("getApp<T"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(" = ")]),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("any")]),t._v(">"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" T"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")])])])])]),t._v(" "),a("p",[t._v("Return the original application instance.")])])])}),[],!1,null,null,null);s.default=n.exports}}]);