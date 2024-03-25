import{_ as e,o as t,c as a,Q as r}from"./chunks/framework.5be90078.js";const f=JSON.parse('{"title":"Interface: RequiredWebSocketOption","description":"","frontmatter":{},"headers":[],"relativePath":"dist/interfaces/core_useWebSocket.RequiredWebSocketOption.md","filePath":"dist/interfaces/core_useWebSocket.RequiredWebSocketOption.md","lastUpdated":null}'),o={name:"dist/interfaces/core_useWebSocket.RequiredWebSocketOption.md"},d=r('<h1 id="interface-requiredwebsocketoption" tabindex="-1">Interface: RequiredWebSocketOption <a class="header-anchor" href="#interface-requiredwebsocketoption" aria-label="Permalink to &quot;Interface: RequiredWebSocketOption&quot;">​</a></h1><p><a href="./../modules/core_useWebSocket.html">core/useWebSocket</a>.RequiredWebSocketOption</p><p>包装器选项（内部）。</p><h2 id="hierarchy" tabindex="-1">Hierarchy <a class="header-anchor" href="#hierarchy" aria-label="Permalink to &quot;Hierarchy&quot;">​</a></h2><ul><li><p><code>Required</code>&lt;<a href="./core_useWebSocket.CreateWebSocketOption.html"><code>CreateWebSocketOption</code></a>&gt;</p></li><li><p><a href="./types.Dictionary.html"><code>Dictionary</code></a></p><p>↳ <strong><code>RequiredWebSocketOption</code></strong></p></li></ul><h2 id="properties" tabindex="-1">Properties <a class="header-anchor" href="#properties" aria-label="Permalink to &quot;Properties&quot;">​</a></h2><h3 id="autoreconnect" tabindex="-1">autoReconnect <a class="header-anchor" href="#autoreconnect" aria-label="Permalink to &quot;autoReconnect&quot;">​</a></h3><p>• <strong>autoReconnect</strong>: <code>Object</code></p><p>重连配置。</p><h4 id="type-declaration" tabindex="-1">Type declaration <a class="header-anchor" href="#type-declaration" aria-label="Permalink to &quot;Type declaration&quot;">​</a></h4><table><thead><tr><th style="text-align:left;">Name</th><th style="text-align:left;">Type</th><th style="text-align:left;">Description</th></tr></thead><tbody><tr><td style="text-align:left;"><code>delay</code></td><td style="text-align:left;"><code>number</code></td><td style="text-align:left;">重连间隔毫秒数。</td></tr><tr><td style="text-align:left;"><code>enable</code></td><td style="text-align:left;"><code>boolean</code></td><td style="text-align:left;">是否启用。</td></tr><tr><td style="text-align:left;"><code>retries</code></td><td style="text-align:left;"><code>number</code></td><td style="text-align:left;">最大重连次数。</td></tr></tbody></table><h4 id="overrides" tabindex="-1">Overrides <a class="header-anchor" href="#overrides" aria-label="Permalink to &quot;Overrides&quot;">​</a></h4><p>Required.autoReconnect</p><hr><h3 id="heartbeat" tabindex="-1">heartbeat <a class="header-anchor" href="#heartbeat" aria-label="Permalink to &quot;heartbeat&quot;">​</a></h3><p>• <strong>heartbeat</strong>: <code>Object</code></p><p>心跳配置。</p><h4 id="type-declaration-1" tabindex="-1">Type declaration <a class="header-anchor" href="#type-declaration-1" aria-label="Permalink to &quot;Type declaration&quot;">​</a></h4><table><thead><tr><th style="text-align:left;">Name</th><th style="text-align:left;">Type</th><th style="text-align:left;">Description</th></tr></thead><tbody><tr><td style="text-align:left;"><code>enable</code></td><td style="text-align:left;"><code>boolean</code></td><td style="text-align:left;">是否启用。</td></tr><tr><td style="text-align:left;"><code>interval</code></td><td style="text-align:left;"><code>number</code></td><td style="text-align:left;">心跳间隔毫秒数。</td></tr><tr><td style="text-align:left;"><code>message</code></td><td style="text-align:left;"><code>string</code> | <code>ArrayBuffer</code> | <code>Blob</code></td><td style="text-align:left;">心跳间隔消息。</td></tr></tbody></table><h4 id="overrides-1" tabindex="-1">Overrides <a class="header-anchor" href="#overrides-1" aria-label="Permalink to &quot;Overrides&quot;">​</a></h4><p>Required.heartbeat</p><hr><h3 id="interceptor" tabindex="-1">interceptor <a class="header-anchor" href="#interceptor" aria-label="Permalink to &quot;interceptor&quot;">​</a></h3><p>• <strong>interceptor</strong>: <a href="./core_useWebSocket.WebSocketInterceptor.html"><code>WebSocketInterceptor</code></a></p><p>拦截器对象。</p><h4 id="inherited-from" tabindex="-1">Inherited from <a class="header-anchor" href="#inherited-from" aria-label="Permalink to &quot;Inherited from&quot;">​</a></h4><p>Required.interceptor</p><hr><h3 id="params" tabindex="-1">params <a class="header-anchor" href="#params" aria-label="Permalink to &quot;params&quot;">​</a></h3><p>• <strong>params</strong>: <a href="./../modules/types.html#collection"><code>Collection</code></a></p><p>请求参数。</p><h4 id="inherited-from-1" tabindex="-1">Inherited from <a class="header-anchor" href="#inherited-from-1" aria-label="Permalink to &quot;Inherited from&quot;">​</a></h4><p>Required.params</p><hr><h3 id="protocols" tabindex="-1">protocols <a class="header-anchor" href="#protocols" aria-label="Permalink to &quot;protocols&quot;">​</a></h3><p>• <strong>protocols</strong>: <code>string</code> | <code>string</code>[]</p><p>协议字符串 or 包含协议字符串的数组。</p><h4 id="inherited-from-2" tabindex="-1">Inherited from <a class="header-anchor" href="#inherited-from-2" aria-label="Permalink to &quot;Inherited from&quot;">​</a></h4><p>Required.protocols</p>',39),i=[d];function l(c,n,s,h,p,b){return t(),a("div",null,i)}const m=e(o,[["render",l]]);export{f as __pageData,m as default};
