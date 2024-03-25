import{_ as s,o as e,c as a,Q as n}from"./chunks/framework.5be90078.js";const b=JSON.parse('{"title":"Module: mode/useObserver","description":"","frontmatter":{"prev":{"text":"useWebSocket（socket）","link":"dist/modules/core_useWebSocket"},"next":false},"headers":[],"relativePath":"dist/modules/mode_useObserver.md","filePath":"dist/modules/mode_useObserver.md","lastUpdated":null}'),o={name:"dist/modules/mode_useObserver.md"},r=n(`<h1 id="module-mode-useobserver" tabindex="-1">Module: mode/useObserver <a class="header-anchor" href="#module-mode-useobserver" aria-label="Permalink to &quot;Module: mode/useObserver&quot;">​</a></h1><h2 id="classes" tabindex="-1">Classes <a class="header-anchor" href="#classes" aria-label="Permalink to &quot;Classes&quot;">​</a></h2><ul><li><a href="./../classes/mode_useObserver.WrapperObserver.html">WrapperObserver</a></li></ul><h2 id="functions" tabindex="-1">Functions <a class="header-anchor" href="#functions" aria-label="Permalink to &quot;Functions&quot;">​</a></h2><h3 id="useobserver" tabindex="-1">useObserver <a class="header-anchor" href="#useobserver" aria-label="Permalink to &quot;useObserver&quot;">​</a></h3><p>▸ <strong>useObserver</strong>(): <a href="./../classes/mode_useObserver.WrapperObserver.html"><code>WrapperObserver</code></a></p><p>返回一个<a href="https://refactoringguru.cn/design-patterns/observer" target="_blank" rel="noreferrer">发布/订阅模式</a>包装器对象。</p><p><strong><code>Example</code></strong></p><div class="language-ts vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">ts</span><pre class="shiki github-dark vp-code-dark"><code><span class="line"><span style="color:#F97583;">const</span><span style="color:#E1E4E8;"> </span><span style="color:#79B8FF;">observer</span><span style="color:#E1E4E8;"> </span><span style="color:#F97583;">=</span><span style="color:#E1E4E8;"> </span><span style="color:#B392F0;">useObserver</span><span style="color:#E1E4E8;">()</span></span>
<span class="line"></span>
<span class="line"><span style="color:#E1E4E8;">observer.</span><span style="color:#B392F0;">on</span><span style="color:#E1E4E8;">(</span><span style="color:#9ECBFF;">&#39;open&#39;</span><span style="color:#E1E4E8;">, () </span><span style="color:#F97583;">=&gt;</span><span style="color:#E1E4E8;"> log </span><span style="color:#79B8FF;">1</span><span style="color:#E1E4E8;">)</span></span>
<span class="line"><span style="color:#F97583;">...</span></span>
<span class="line"><span style="color:#E1E4E8;">observer.</span><span style="color:#B392F0;">emit</span><span style="color:#E1E4E8;">(</span><span style="color:#9ECBFF;">&#39;open&#39;</span><span style="color:#E1E4E8;">)</span></span>
<span class="line"><span style="color:#F97583;">=&gt;</span><span style="color:#E1E4E8;"> log </span><span style="color:#79B8FF;">1</span></span></code></pre><pre class="shiki github-light vp-code-light"><code><span class="line"><span style="color:#D73A49;">const</span><span style="color:#24292E;"> </span><span style="color:#005CC5;">observer</span><span style="color:#24292E;"> </span><span style="color:#D73A49;">=</span><span style="color:#24292E;"> </span><span style="color:#6F42C1;">useObserver</span><span style="color:#24292E;">()</span></span>
<span class="line"></span>
<span class="line"><span style="color:#24292E;">observer.</span><span style="color:#6F42C1;">on</span><span style="color:#24292E;">(</span><span style="color:#032F62;">&#39;open&#39;</span><span style="color:#24292E;">, () </span><span style="color:#D73A49;">=&gt;</span><span style="color:#24292E;"> log </span><span style="color:#005CC5;">1</span><span style="color:#24292E;">)</span></span>
<span class="line"><span style="color:#D73A49;">...</span></span>
<span class="line"><span style="color:#24292E;">observer.</span><span style="color:#6F42C1;">emit</span><span style="color:#24292E;">(</span><span style="color:#032F62;">&#39;open&#39;</span><span style="color:#24292E;">)</span></span>
<span class="line"><span style="color:#D73A49;">=&gt;</span><span style="color:#24292E;"> log </span><span style="color:#005CC5;">1</span></span></code></pre></div><h4 id="returns" tabindex="-1">Returns <a class="header-anchor" href="#returns" aria-label="Permalink to &quot;Returns&quot;">​</a></h4><p><a href="./../classes/mode_useObserver.WrapperObserver.html"><code>WrapperObserver</code></a></p>`,11),l=[r];function p(t,c,d,i,u,E){return e(),a("div",null,l)}const h=s(o,[["render",p]]);export{b as __pageData,h as default};
