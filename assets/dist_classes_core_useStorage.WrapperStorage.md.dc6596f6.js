import{_ as s,o as e,c as a,Q as t}from"./chunks/framework.5be90078.js";const g=JSON.parse('{"title":"Class: WrapperStorage","description":"","frontmatter":{},"headers":[],"relativePath":"dist/classes/core_useStorage.WrapperStorage.md","filePath":"dist/classes/core_useStorage.WrapperStorage.md","lastUpdated":null}'),o={name:"dist/classes/core_useStorage.WrapperStorage.md"},l=t(`<h1 id="class-wrapperstorage" tabindex="-1">Class: WrapperStorage <a class="header-anchor" href="#class-wrapperstorage" aria-label="Permalink to &quot;Class: WrapperStorage&quot;">​</a></h1><p><a href="./../modules/core_useStorage.html">core/useStorage</a>.WrapperStorage</p><p>包装器类。</p><h2 id="constructors" tabindex="-1">Constructors <a class="header-anchor" href="#constructors" aria-label="Permalink to &quot;Constructors&quot;">​</a></h2><h3 id="constructor" tabindex="-1">constructor <a class="header-anchor" href="#constructor" aria-label="Permalink to &quot;constructor&quot;">​</a></h3><p>• <strong>new WrapperStorage</strong>(<code>storage</code>, <code>option</code>)</p><h4 id="parameters" tabindex="-1">Parameters <a class="header-anchor" href="#parameters" aria-label="Permalink to &quot;Parameters&quot;">​</a></h4><table><thead><tr><th style="text-align:left;">Name</th><th style="text-align:left;">Type</th></tr></thead><tbody><tr><td style="text-align:left;"><code>storage</code></td><td style="text-align:left;"><code>Storage</code></td></tr><tr><td style="text-align:left;"><code>option</code></td><td style="text-align:left;"><code>Required</code>&lt;<a href="./../interfaces/core_useStorage.CreateStorageOption.html"><code>CreateStorageOption</code></a>&gt;</td></tr></tbody></table><h2 id="properties" tabindex="-1">Properties <a class="header-anchor" href="#properties" aria-label="Permalink to &quot;Properties&quot;">​</a></h2><h3 id="expiretimems" tabindex="-1">#expireTimeMs <a class="header-anchor" href="#expiretimems" aria-label="Permalink to &quot;#expireTimeMs&quot;">​</a></h3><p>• <code>Private</code> <code>Readonly</code> <strong>#expireTimeMs</strong>: <code>number</code></p><hr><h3 id="storage" tabindex="-1">#storage <a class="header-anchor" href="#storage" aria-label="Permalink to &quot;#storage&quot;">​</a></h3><p>• <code>Private</code> <code>Readonly</code> <strong>#storage</strong>: <code>Storage</code></p><h2 id="accessors" tabindex="-1">Accessors <a class="header-anchor" href="#accessors" aria-label="Permalink to &quot;Accessors&quot;">​</a></h2><h3 id="self" tabindex="-1">self <a class="header-anchor" href="#self" aria-label="Permalink to &quot;self&quot;">​</a></h3><p>• <code>get</code> <strong>self</strong>(): <code>Storage</code></p><p><code>storage</code>对象。</p><h4 id="returns" tabindex="-1">Returns <a class="header-anchor" href="#returns" aria-label="Permalink to &quot;Returns&quot;">​</a></h4><p><code>Storage</code></p><h2 id="methods" tabindex="-1">Methods <a class="header-anchor" href="#methods" aria-label="Permalink to &quot;Methods&quot;">​</a></h2><h3 id="clear" tabindex="-1">clear <a class="header-anchor" href="#clear" aria-label="Permalink to &quot;clear&quot;">​</a></h3><p>▸ <strong>clear</strong>(): <code>void</code></p><p>清空<code>storage</code>中的所有键名。</p><p><strong><code>Example</code></strong></p><div class="language-ts vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">ts</span><pre class="shiki github-dark vp-code-dark"><code><span class="line"><span style="color:#B392F0;">useStorage</span><span style="color:#E1E4E8;">().</span><span style="color:#B392F0;">clear</span><span style="color:#E1E4E8;">()</span></span></code></pre><pre class="shiki github-light vp-code-light"><code><span class="line"><span style="color:#6F42C1;">useStorage</span><span style="color:#24292E;">().</span><span style="color:#6F42C1;">clear</span><span style="color:#24292E;">()</span></span></code></pre></div><h4 id="returns-1" tabindex="-1">Returns <a class="header-anchor" href="#returns-1" aria-label="Permalink to &quot;Returns&quot;">​</a></h4><p><code>void</code></p><hr><h3 id="get" tabindex="-1">get <a class="header-anchor" href="#get" aria-label="Permalink to &quot;get&quot;">​</a></h3><p>▸ <strong>get</strong>(<code>key</code>, <code>def?</code>, <code>property?</code>): <code>any</code></p><p>返回<code>storage</code>给定键的值，支持默认值和萃取属性，如有设置过期时间且数据已过期返回<code>null</code>。</p><p><strong><code>Example</code></strong></p><div class="language-ts vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">ts</span><pre class="shiki github-dark vp-code-dark"><code><span class="line"><span style="color:#B392F0;">useStorage</span><span style="color:#E1E4E8;">().</span><span style="color:#B392F0;">get</span><span style="color:#E1E4E8;">(</span><span style="color:#9ECBFF;">&#39;unknown&#39;</span><span style="color:#E1E4E8;">, </span><span style="color:#9ECBFF;">&#39;defValue&#39;</span><span style="color:#E1E4E8;">)</span></span>
<span class="line"><span style="color:#F97583;">=&gt;</span><span style="color:#E1E4E8;"> </span><span style="color:#9ECBFF;">&#39;defValue&#39;</span></span>
<span class="line"></span>
<span class="line"><span style="color:#B392F0;">useStorage</span><span style="color:#E1E4E8;">().</span><span style="color:#B392F0;">get</span><span style="color:#E1E4E8;">(</span><span style="color:#9ECBFF;">&#39;key&#39;</span><span style="color:#E1E4E8;">, </span><span style="color:#79B8FF;">null</span><span style="color:#E1E4E8;">, </span><span style="color:#9ECBFF;">&#39;expire&#39;</span><span style="color:#E1E4E8;">)</span></span>
<span class="line"><span style="color:#F97583;">=&gt;</span><span style="color:#E1E4E8;"> </span><span style="color:#79B8FF;">1693275351948</span></span>
<span class="line"><span style="color:#F97583;">...</span><span style="color:#E1E4E8;">After time</span><span style="color:#F97583;">...</span></span>
<span class="line"><span style="color:#B392F0;">useStorage</span><span style="color:#E1E4E8;">().</span><span style="color:#B392F0;">get</span><span style="color:#E1E4E8;">(</span><span style="color:#9ECBFF;">&#39;key&#39;</span><span style="color:#E1E4E8;">, </span><span style="color:#79B8FF;">null</span><span style="color:#E1E4E8;">, </span><span style="color:#9ECBFF;">&#39;expire&#39;</span><span style="color:#E1E4E8;">)</span></span>
<span class="line"><span style="color:#F97583;">=&gt;</span><span style="color:#E1E4E8;"> </span><span style="color:#79B8FF;">null</span></span>
<span class="line"></span>
<span class="line"><span style="color:#B392F0;">useStorage</span><span style="color:#E1E4E8;">().</span><span style="color:#B392F0;">get</span><span style="color:#E1E4E8;">(</span><span style="color:#9ECBFF;">&#39;key&#39;</span><span style="color:#E1E4E8;">)</span></span>
<span class="line"><span style="color:#F97583;">=&gt;</span><span style="color:#E1E4E8;"> { </span><span style="color:#B392F0;">value</span><span style="color:#E1E4E8;">: </span><span style="color:#9ECBFF;">&#39;value&#39;</span><span style="color:#E1E4E8;">, </span><span style="color:#B392F0;">expire</span><span style="color:#E1E4E8;">: </span><span style="color:#79B8FF;">1693275351948</span><span style="color:#E1E4E8;"> }</span></span></code></pre><pre class="shiki github-light vp-code-light"><code><span class="line"><span style="color:#6F42C1;">useStorage</span><span style="color:#24292E;">().</span><span style="color:#6F42C1;">get</span><span style="color:#24292E;">(</span><span style="color:#032F62;">&#39;unknown&#39;</span><span style="color:#24292E;">, </span><span style="color:#032F62;">&#39;defValue&#39;</span><span style="color:#24292E;">)</span></span>
<span class="line"><span style="color:#D73A49;">=&gt;</span><span style="color:#24292E;"> </span><span style="color:#032F62;">&#39;defValue&#39;</span></span>
<span class="line"></span>
<span class="line"><span style="color:#6F42C1;">useStorage</span><span style="color:#24292E;">().</span><span style="color:#6F42C1;">get</span><span style="color:#24292E;">(</span><span style="color:#032F62;">&#39;key&#39;</span><span style="color:#24292E;">, </span><span style="color:#005CC5;">null</span><span style="color:#24292E;">, </span><span style="color:#032F62;">&#39;expire&#39;</span><span style="color:#24292E;">)</span></span>
<span class="line"><span style="color:#D73A49;">=&gt;</span><span style="color:#24292E;"> </span><span style="color:#005CC5;">1693275351948</span></span>
<span class="line"><span style="color:#D73A49;">...</span><span style="color:#24292E;">After time</span><span style="color:#D73A49;">...</span></span>
<span class="line"><span style="color:#6F42C1;">useStorage</span><span style="color:#24292E;">().</span><span style="color:#6F42C1;">get</span><span style="color:#24292E;">(</span><span style="color:#032F62;">&#39;key&#39;</span><span style="color:#24292E;">, </span><span style="color:#005CC5;">null</span><span style="color:#24292E;">, </span><span style="color:#032F62;">&#39;expire&#39;</span><span style="color:#24292E;">)</span></span>
<span class="line"><span style="color:#D73A49;">=&gt;</span><span style="color:#24292E;"> </span><span style="color:#005CC5;">null</span></span>
<span class="line"></span>
<span class="line"><span style="color:#6F42C1;">useStorage</span><span style="color:#24292E;">().</span><span style="color:#6F42C1;">get</span><span style="color:#24292E;">(</span><span style="color:#032F62;">&#39;key&#39;</span><span style="color:#24292E;">)</span></span>
<span class="line"><span style="color:#D73A49;">=&gt;</span><span style="color:#24292E;"> { </span><span style="color:#6F42C1;">value</span><span style="color:#24292E;">: </span><span style="color:#032F62;">&#39;value&#39;</span><span style="color:#24292E;">, </span><span style="color:#6F42C1;">expire</span><span style="color:#24292E;">: </span><span style="color:#005CC5;">1693275351948</span><span style="color:#24292E;"> }</span></span></code></pre></div><h4 id="parameters-1" tabindex="-1">Parameters <a class="header-anchor" href="#parameters-1" aria-label="Permalink to &quot;Parameters&quot;">​</a></h4><table><thead><tr><th style="text-align:left;">Name</th><th style="text-align:left;">Type</th><th style="text-align:left;">Description</th></tr></thead><tbody><tr><td style="text-align:left;"><code>key</code></td><td style="text-align:left;"><code>string</code></td><td style="text-align:left;">给定键</td></tr><tr><td style="text-align:left;"><code>def?</code></td><td style="text-align:left;"><code>unknown</code></td><td style="text-align:left;">默认值</td></tr><tr><td style="text-align:left;"><code>property?</code></td><td style="text-align:left;">keyof <a href="./../interfaces/core_useStorage.StorageFormat.html"><code>StorageFormat</code></a></td><td style="text-align:left;">萃取属性</td></tr></tbody></table><h4 id="returns-2" tabindex="-1">Returns <a class="header-anchor" href="#returns-2" aria-label="Permalink to &quot;Returns&quot;">​</a></h4><p><code>any</code></p><hr><h3 id="remove" tabindex="-1">remove <a class="header-anchor" href="#remove" aria-label="Permalink to &quot;remove&quot;">​</a></h3><p>▸ <strong>remove</strong>(<code>key</code>): <code>void</code></p><p>删除<code>storage</code>中的给定键名。</p><p><strong><code>Example</code></strong></p><div class="language-ts vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">ts</span><pre class="shiki github-dark vp-code-dark"><code><span class="line"><span style="color:#B392F0;">useStorage</span><span style="color:#E1E4E8;">().</span><span style="color:#B392F0;">remove</span><span style="color:#E1E4E8;">(</span><span style="color:#9ECBFF;">&#39;key&#39;</span><span style="color:#E1E4E8;">)</span></span></code></pre><pre class="shiki github-light vp-code-light"><code><span class="line"><span style="color:#6F42C1;">useStorage</span><span style="color:#24292E;">().</span><span style="color:#6F42C1;">remove</span><span style="color:#24292E;">(</span><span style="color:#032F62;">&#39;key&#39;</span><span style="color:#24292E;">)</span></span></code></pre></div><h4 id="parameters-2" tabindex="-1">Parameters <a class="header-anchor" href="#parameters-2" aria-label="Permalink to &quot;Parameters&quot;">​</a></h4><table><thead><tr><th style="text-align:left;">Name</th><th style="text-align:left;">Type</th><th style="text-align:left;">Description</th></tr></thead><tbody><tr><td style="text-align:left;"><code>key</code></td><td style="text-align:left;"><code>string</code></td><td style="text-align:left;">给定键</td></tr></tbody></table><h4 id="returns-3" tabindex="-1">Returns <a class="header-anchor" href="#returns-3" aria-label="Permalink to &quot;Returns&quot;">​</a></h4><p><code>void</code></p><hr><h3 id="set" tabindex="-1">set <a class="header-anchor" href="#set" aria-label="Permalink to &quot;set&quot;">​</a></h3><p>▸ <strong>set</strong>(<code>key</code>, <code>value</code>, <code>customExpireMs?</code>): <code>void</code></p><p>将键值对添加到<code>storage</code>中，如果键名存在，则更新其对应的值。</p><p><strong><code>Example</code></strong></p><div class="language-ts vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">ts</span><pre class="shiki github-dark vp-code-dark"><code><span class="line"><span style="color:#B392F0;">useStorage</span><span style="color:#E1E4E8;">().</span><span style="color:#B392F0;">set</span><span style="color:#E1E4E8;">(</span><span style="color:#9ECBFF;">&#39;key&#39;</span><span style="color:#E1E4E8;">, </span><span style="color:#9ECBFF;">&#39;value&#39;</span><span style="color:#E1E4E8;">)</span></span>
<span class="line"></span>
<span class="line"><span style="color:#B392F0;">useStorage</span><span style="color:#E1E4E8;">().</span><span style="color:#B392F0;">set</span><span style="color:#E1E4E8;">(</span><span style="color:#9ECBFF;">&#39;key&#39;</span><span style="color:#E1E4E8;">, </span><span style="color:#9ECBFF;">&#39;value&#39;</span><span style="color:#E1E4E8;">, </span><span style="color:#F97583;">new</span><span style="color:#E1E4E8;"> </span><span style="color:#B392F0;">Date</span><span style="color:#E1E4E8;">().</span><span style="color:#B392F0;">getTime</span><span style="color:#E1E4E8;">() </span><span style="color:#F97583;">+</span><span style="color:#E1E4E8;"> oneDay)</span></span></code></pre><pre class="shiki github-light vp-code-light"><code><span class="line"><span style="color:#6F42C1;">useStorage</span><span style="color:#24292E;">().</span><span style="color:#6F42C1;">set</span><span style="color:#24292E;">(</span><span style="color:#032F62;">&#39;key&#39;</span><span style="color:#24292E;">, </span><span style="color:#032F62;">&#39;value&#39;</span><span style="color:#24292E;">)</span></span>
<span class="line"></span>
<span class="line"><span style="color:#6F42C1;">useStorage</span><span style="color:#24292E;">().</span><span style="color:#6F42C1;">set</span><span style="color:#24292E;">(</span><span style="color:#032F62;">&#39;key&#39;</span><span style="color:#24292E;">, </span><span style="color:#032F62;">&#39;value&#39;</span><span style="color:#24292E;">, </span><span style="color:#D73A49;">new</span><span style="color:#24292E;"> </span><span style="color:#6F42C1;">Date</span><span style="color:#24292E;">().</span><span style="color:#6F42C1;">getTime</span><span style="color:#24292E;">() </span><span style="color:#D73A49;">+</span><span style="color:#24292E;"> oneDay)</span></span></code></pre></div><h4 id="parameters-3" tabindex="-1">Parameters <a class="header-anchor" href="#parameters-3" aria-label="Permalink to &quot;Parameters&quot;">​</a></h4><table><thead><tr><th style="text-align:left;">Name</th><th style="text-align:left;">Type</th><th style="text-align:left;">Description</th></tr></thead><tbody><tr><td style="text-align:left;"><code>key</code></td><td style="text-align:left;"><code>string</code></td><td style="text-align:left;">给定键</td></tr><tr><td style="text-align:left;"><code>value</code></td><td style="text-align:left;"><code>unknown</code></td><td style="text-align:left;">给定值</td></tr><tr><td style="text-align:left;"><code>customExpireMs?</code></td><td style="text-align:left;"><code>number</code> | <code>true</code></td><td style="text-align:left;">给定过期时间（毫秒），传递 true 则使用默认选项的过期时间</td></tr></tbody></table><h4 id="returns-4" tabindex="-1">Returns <a class="header-anchor" href="#returns-4" aria-label="Permalink to &quot;Returns&quot;">​</a></h4><p><code>void</code></p>`,58),n=[l];function r(p,c,d,i,y,E){return e(),a("div",null,n)}const u=s(o,[["render",r]]);export{g as __pageData,u as default};
