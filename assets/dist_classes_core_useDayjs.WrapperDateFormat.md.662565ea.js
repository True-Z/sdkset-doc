import{_ as e,o as t,c as o,Q as a}from"./chunks/framework.5be90078.js";const q=JSON.parse('{"title":"Class: WrapperDateFormat<C>","description":"","frontmatter":{},"headers":[],"relativePath":"dist/classes/core_useDayjs.WrapperDateFormat.md","filePath":"dist/classes/core_useDayjs.WrapperDateFormat.md","lastUpdated":null}'),s={name:"dist/classes/core_useDayjs.WrapperDateFormat.md"},l=a(`<h1 id="class-wrapperdateformat-c" tabindex="-1">Class: WrapperDateFormat&lt;C&gt; <a class="header-anchor" href="#class-wrapperdateformat-c" aria-label="Permalink to &quot;Class: WrapperDateFormat&lt;C\\&gt;&quot;">​</a></h1><p><a href="./../modules/core_useDayjs.html">core/useDayjs</a>.WrapperDateFormat</p><p>包装器类。</p><h2 id="type-parameters" tabindex="-1">Type parameters <a class="header-anchor" href="#type-parameters" aria-label="Permalink to &quot;Type parameters&quot;">​</a></h2><table><thead><tr><th style="text-align:left;">Name</th><th style="text-align:left;">Type</th></tr></thead><tbody><tr><td style="text-align:left;"><code>C</code></td><td style="text-align:left;">extends <a href="./../interfaces/core_useDayjs.CreateDayjsOption.html"><code>CreateDayjsOption</code></a></td></tr></tbody></table><h2 id="constructors" tabindex="-1">Constructors <a class="header-anchor" href="#constructors" aria-label="Permalink to &quot;Constructors&quot;">​</a></h2><h3 id="constructor" tabindex="-1">constructor <a class="header-anchor" href="#constructor" aria-label="Permalink to &quot;constructor&quot;">​</a></h3><p>• <strong>new WrapperDateFormat</strong>&lt;<code>C</code>&gt;(<code>dayjsInstance</code>, <code>convers</code>, <code>template</code>)</p><h4 id="type-parameters-1" tabindex="-1">Type parameters <a class="header-anchor" href="#type-parameters-1" aria-label="Permalink to &quot;Type parameters&quot;">​</a></h4><table><thead><tr><th style="text-align:left;">Name</th><th style="text-align:left;">Type</th></tr></thead><tbody><tr><td style="text-align:left;"><code>C</code></td><td style="text-align:left;">extends <a href="./../interfaces/core_useDayjs.CreateDayjsOption.html"><code>CreateDayjsOption</code></a>&lt;<code>C</code>&gt;</td></tr></tbody></table><h4 id="parameters" tabindex="-1">Parameters <a class="header-anchor" href="#parameters" aria-label="Permalink to &quot;Parameters&quot;">​</a></h4><table><thead><tr><th style="text-align:left;">Name</th><th style="text-align:left;">Type</th></tr></thead><tbody><tr><td style="text-align:left;"><code>dayjsInstance</code></td><td style="text-align:left;"><code>Dayjs</code></td></tr><tr><td style="text-align:left;"><code>convers</code></td><td style="text-align:left;"><a href="./../modules/core_useDayjs.html#dayjsconvers"><code>DayjsConvers</code></a></td></tr><tr><td style="text-align:left;"><code>template</code></td><td style="text-align:left;"><code>string</code></td></tr></tbody></table><h2 id="properties" tabindex="-1">Properties <a class="header-anchor" href="#properties" aria-label="Permalink to &quot;Properties&quot;">​</a></h2><h3 id="convers" tabindex="-1">#convers <a class="header-anchor" href="#convers" aria-label="Permalink to &quot;#convers&quot;">​</a></h3><p>• <code>Private</code> <code>Readonly</code> <strong>#convers</strong>: <a href="./../modules/core_useDayjs.html#dayjsconvers"><code>DayjsConvers</code></a></p><hr><h3 id="dayjs" tabindex="-1">#dayjs <a class="header-anchor" href="#dayjs" aria-label="Permalink to &quot;#dayjs&quot;">​</a></h3><p>• <code>Private</code> <code>Readonly</code> <strong>#dayjs</strong>: <code>Dayjs</code></p><hr><h3 id="template" tabindex="-1">#template <a class="header-anchor" href="#template" aria-label="Permalink to &quot;#template&quot;">​</a></h3><p>• <code>Private</code> <code>Readonly</code> <strong>#template</strong>: <code>string</code></p><h2 id="accessors" tabindex="-1">Accessors <a class="header-anchor" href="#accessors" aria-label="Permalink to &quot;Accessors&quot;">​</a></h2><h3 id="self" tabindex="-1">self <a class="header-anchor" href="#self" aria-label="Permalink to &quot;self&quot;">​</a></h3><p>• <code>get</code> <strong>self</strong>(): <code>Dayjs</code></p><p><code>day.js</code>实例。</p><h4 id="returns" tabindex="-1">Returns <a class="header-anchor" href="#returns" aria-label="Permalink to &quot;Returns&quot;">​</a></h4><p><code>Dayjs</code></p><h2 id="methods" tabindex="-1">Methods <a class="header-anchor" href="#methods" aria-label="Permalink to &quot;Methods&quot;">​</a></h2><h3 id="conversto" tabindex="-1">#conversTo <a class="header-anchor" href="#conversto" aria-label="Permalink to &quot;#conversTo&quot;">​</a></h3><p>▸ <code>Private</code> <strong>#conversTo</strong>(<code>dayjs</code>): <a href="./../modules/core_useDayjs.html#dayjstypeto"><code>DayjsTypeTo</code></a>&lt;<code>C</code>&gt;</p><p>包装器内部转换。</p><h4 id="parameters-1" tabindex="-1">Parameters <a class="header-anchor" href="#parameters-1" aria-label="Permalink to &quot;Parameters&quot;">​</a></h4><table><thead><tr><th style="text-align:left;">Name</th><th style="text-align:left;">Type</th></tr></thead><tbody><tr><td style="text-align:left;"><code>dayjs</code></td><td style="text-align:left;"><code>Dayjs</code></td></tr></tbody></table><h4 id="returns-1" tabindex="-1">Returns <a class="header-anchor" href="#returns-1" aria-label="Permalink to &quot;Returns&quot;">​</a></h4><p><a href="./../modules/core_useDayjs.html#dayjstypeto"><code>DayjsTypeTo</code></a>&lt;<code>C</code>&gt;</p><hr><h3 id="add" tabindex="-1">add <a class="header-anchor" href="#add" aria-label="Permalink to &quot;add&quot;">​</a></h3><p>▸ <strong>add</strong>(<code>value</code>, <code>unit</code>): <a href="./core_useDayjs.WrapperDateFormat.html"><code>WrapperDateFormat</code></a>&lt;<code>C</code>&gt;</p><p>返回增加一定时间的<code>day.js</code>对象包装器实例。</p><p><strong><code>Example</code></strong></p><div class="language-ts vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">ts</span><pre class="shiki github-dark vp-code-dark"><code><span class="line"><span style="color:#B392F0;">useDayjs</span><span style="color:#E1E4E8;">(</span><span style="color:#9ECBFF;">&#39;2012-12-21 00:00:00&#39;</span><span style="color:#E1E4E8;">).</span><span style="color:#B392F0;">add</span><span style="color:#E1E4E8;">(</span><span style="color:#79B8FF;">1</span><span style="color:#E1E4E8;">, </span><span style="color:#9ECBFF;">&#39;day&#39;</span><span style="color:#E1E4E8;">).</span><span style="color:#B392F0;">value</span><span style="color:#E1E4E8;">()</span></span>
<span class="line"><span style="color:#F97583;">=&gt;</span><span style="color:#E1E4E8;"> </span><span style="color:#9ECBFF;">&#39;2012-12-22 00:00:00&#39;</span></span></code></pre><pre class="shiki github-light vp-code-light"><code><span class="line"><span style="color:#6F42C1;">useDayjs</span><span style="color:#24292E;">(</span><span style="color:#032F62;">&#39;2012-12-21 00:00:00&#39;</span><span style="color:#24292E;">).</span><span style="color:#6F42C1;">add</span><span style="color:#24292E;">(</span><span style="color:#005CC5;">1</span><span style="color:#24292E;">, </span><span style="color:#032F62;">&#39;day&#39;</span><span style="color:#24292E;">).</span><span style="color:#6F42C1;">value</span><span style="color:#24292E;">()</span></span>
<span class="line"><span style="color:#D73A49;">=&gt;</span><span style="color:#24292E;"> </span><span style="color:#032F62;">&#39;2012-12-22 00:00:00&#39;</span></span></code></pre></div><h4 id="parameters-2" tabindex="-1">Parameters <a class="header-anchor" href="#parameters-2" aria-label="Permalink to &quot;Parameters&quot;">​</a></h4><table><thead><tr><th style="text-align:left;">Name</th><th style="text-align:left;">Type</th><th style="text-align:left;">Description</th></tr></thead><tbody><tr><td style="text-align:left;"><code>value</code></td><td style="text-align:left;"><code>number</code></td><td style="text-align:left;">时间数值</td></tr><tr><td style="text-align:left;"><code>unit</code></td><td style="text-align:left;"><code>&quot;date&quot;</code> | <code>&quot;M&quot;</code> | <code>&quot;D&quot;</code> | <code>&quot;d&quot;</code> | <code>&quot;h&quot;</code> | <code>&quot;m&quot;</code> | <code>&quot;s&quot;</code> | <code>&quot;Q&quot;</code> | <code>&quot;w&quot;</code> | <code>&quot;millisecond&quot;</code> | <code>&quot;second&quot;</code> | <code>&quot;minute&quot;</code> | <code>&quot;hour&quot;</code> | <code>&quot;day&quot;</code> | <code>&quot;month&quot;</code> | <code>&quot;year&quot;</code> | <code>&quot;milliseconds&quot;</code> | <code>&quot;seconds&quot;</code> | <code>&quot;minutes&quot;</code> | <code>&quot;hours&quot;</code> | <code>&quot;days&quot;</code> | <code>&quot;months&quot;</code> | <code>&quot;years&quot;</code> | <code>&quot;dates&quot;</code> | <code>&quot;y&quot;</code> | <code>&quot;ms&quot;</code> | <code>&quot;quarter&quot;</code> | <code>&quot;quarters&quot;</code> | <code>&quot;week&quot;</code> | <code>&quot;weeks&quot;</code></td><td style="text-align:left;">时间单位</td></tr></tbody></table><h4 id="returns-2" tabindex="-1">Returns <a class="header-anchor" href="#returns-2" aria-label="Permalink to &quot;Returns&quot;">​</a></h4><p><a href="./core_useDayjs.WrapperDateFormat.html"><code>WrapperDateFormat</code></a>&lt;<code>C</code>&gt;</p><hr><h3 id="endof" tabindex="-1">endOf <a class="header-anchor" href="#endof" aria-label="Permalink to &quot;endOf&quot;">​</a></h3><p>▸ <strong>endOf</strong>(<code>unit</code>): <a href="./core_useDayjs.WrapperDateFormat.html"><code>WrapperDateFormat</code></a>&lt;<code>C</code>&gt;</p><p>返回给定时间结束的<code>day.js</code>对象包装器实例。</p><p><strong><code>Example</code></strong></p><div class="language-ts vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">ts</span><pre class="shiki github-dark vp-code-dark"><code><span class="line"><span style="color:#B392F0;">useDayjs</span><span style="color:#E1E4E8;">(</span><span style="color:#9ECBFF;">&#39;2012-12-21 00:00:00&#39;</span><span style="color:#E1E4E8;">).</span><span style="color:#B392F0;">endOf</span><span style="color:#E1E4E8;">(</span><span style="color:#9ECBFF;">&#39;month&#39;</span><span style="color:#E1E4E8;">).</span><span style="color:#B392F0;">value</span><span style="color:#E1E4E8;">()</span></span>
<span class="line"><span style="color:#F97583;">=&gt;</span><span style="color:#E1E4E8;"> </span><span style="color:#9ECBFF;">&#39;2012-12-31 00:00:00&#39;</span></span></code></pre><pre class="shiki github-light vp-code-light"><code><span class="line"><span style="color:#6F42C1;">useDayjs</span><span style="color:#24292E;">(</span><span style="color:#032F62;">&#39;2012-12-21 00:00:00&#39;</span><span style="color:#24292E;">).</span><span style="color:#6F42C1;">endOf</span><span style="color:#24292E;">(</span><span style="color:#032F62;">&#39;month&#39;</span><span style="color:#24292E;">).</span><span style="color:#6F42C1;">value</span><span style="color:#24292E;">()</span></span>
<span class="line"><span style="color:#D73A49;">=&gt;</span><span style="color:#24292E;"> </span><span style="color:#032F62;">&#39;2012-12-31 00:00:00&#39;</span></span></code></pre></div><h4 id="parameters-3" tabindex="-1">Parameters <a class="header-anchor" href="#parameters-3" aria-label="Permalink to &quot;Parameters&quot;">​</a></h4><table><thead><tr><th style="text-align:left;">Name</th><th style="text-align:left;">Type</th><th style="text-align:left;">Description</th></tr></thead><tbody><tr><td style="text-align:left;"><code>unit</code></td><td style="text-align:left;"><code>&quot;date&quot;</code> | <code>&quot;M&quot;</code> | <code>&quot;D&quot;</code> | <code>&quot;d&quot;</code> | <code>&quot;h&quot;</code> | <code>&quot;m&quot;</code> | <code>&quot;s&quot;</code> | <code>&quot;Q&quot;</code> | <code>&quot;w&quot;</code> | <code>&quot;millisecond&quot;</code> | <code>&quot;second&quot;</code> | <code>&quot;minute&quot;</code> | <code>&quot;hour&quot;</code> | <code>&quot;day&quot;</code> | <code>&quot;month&quot;</code> | <code>&quot;year&quot;</code> | <code>&quot;milliseconds&quot;</code> | <code>&quot;seconds&quot;</code> | <code>&quot;minutes&quot;</code> | <code>&quot;hours&quot;</code> | <code>&quot;days&quot;</code> | <code>&quot;months&quot;</code> | <code>&quot;years&quot;</code> | <code>&quot;dates&quot;</code> | <code>&quot;y&quot;</code> | <code>&quot;ms&quot;</code> | <code>&quot;quarter&quot;</code> | <code>&quot;quarters&quot;</code> | <code>&quot;week&quot;</code> | <code>&quot;weeks&quot;</code></td><td style="text-align:left;">时间单位</td></tr></tbody></table><h4 id="returns-3" tabindex="-1">Returns <a class="header-anchor" href="#returns-3" aria-label="Permalink to &quot;Returns&quot;">​</a></h4><p><a href="./core_useDayjs.WrapperDateFormat.html"><code>WrapperDateFormat</code></a>&lt;<code>C</code>&gt;</p><hr><h3 id="format" tabindex="-1">format <a class="header-anchor" href="#format" aria-label="Permalink to &quot;format&quot;">​</a></h3><p>▸ <strong>format</strong>(<code>template?</code>): <code>string</code></p><p>根据传入的占位符返回格式化后的日期字符串。</p><p><strong><code>Example</code></strong></p><div class="language-ts vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">ts</span><pre class="shiki github-dark vp-code-dark"><code><span class="line"><span style="color:#B392F0;">useDayjs</span><span style="color:#E1E4E8;">(</span><span style="color:#9ECBFF;">&#39;2012-12-21 00:00:00&#39;</span><span style="color:#E1E4E8;">).</span><span style="color:#B392F0;">format</span><span style="color:#E1E4E8;">(</span><span style="color:#9ECBFF;">&#39;YYYY-MM-DD&#39;</span><span style="color:#E1E4E8;">)</span></span>
<span class="line"><span style="color:#F97583;">=&gt;</span><span style="color:#E1E4E8;"> </span><span style="color:#9ECBFF;">&#39;2012-12-21&#39;</span></span></code></pre><pre class="shiki github-light vp-code-light"><code><span class="line"><span style="color:#6F42C1;">useDayjs</span><span style="color:#24292E;">(</span><span style="color:#032F62;">&#39;2012-12-21 00:00:00&#39;</span><span style="color:#24292E;">).</span><span style="color:#6F42C1;">format</span><span style="color:#24292E;">(</span><span style="color:#032F62;">&#39;YYYY-MM-DD&#39;</span><span style="color:#24292E;">)</span></span>
<span class="line"><span style="color:#D73A49;">=&gt;</span><span style="color:#24292E;"> </span><span style="color:#032F62;">&#39;2012-12-21&#39;</span></span></code></pre></div><h4 id="parameters-4" tabindex="-1">Parameters <a class="header-anchor" href="#parameters-4" aria-label="Permalink to &quot;Parameters&quot;">​</a></h4><table><thead><tr><th style="text-align:left;">Name</th><th style="text-align:left;">Type</th><th style="text-align:left;">Description</th></tr></thead><tbody><tr><td style="text-align:left;"><code>template?</code></td><td style="text-align:left;"><code>string</code></td><td style="text-align:left;">时间单位</td></tr></tbody></table><h4 id="returns-4" tabindex="-1">Returns <a class="header-anchor" href="#returns-4" aria-label="Permalink to &quot;Returns&quot;">​</a></h4><p><code>string</code></p><hr><h3 id="get" tabindex="-1">get <a class="header-anchor" href="#get" aria-label="Permalink to &quot;get&quot;">​</a></h3><p>▸ <strong>get</strong>(<code>unit</code>): <code>number</code></p><p>返回一个数值，数值由包装器实例中<code>day.js</code>对象相应信息的<code>getter</code>组成。各个传入的单位对大小写不敏感，支持缩写和复数。请注意，缩写是区分大小写的。</p><p><strong><code>Example</code></strong></p><div class="language-ts vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">ts</span><pre class="shiki github-dark vp-code-dark"><code><span class="line"><span style="color:#B392F0;">useDayjs</span><span style="color:#E1E4E8;">(</span><span style="color:#9ECBFF;">&#39;2012-01-01&#39;</span><span style="color:#E1E4E8;">).</span><span style="color:#B392F0;">get</span><span style="color:#E1E4E8;">(</span><span style="color:#9ECBFF;">&#39;month&#39;</span><span style="color:#E1E4E8;">)</span></span>
<span class="line"><span style="color:#F97583;">=&gt;</span><span style="color:#E1E4E8;"> </span><span style="color:#79B8FF;">0</span><span style="color:#E1E4E8;"> </span><span style="color:#6A737D;">// 月份为 0 ~ 11</span></span></code></pre><pre class="shiki github-light vp-code-light"><code><span class="line"><span style="color:#6F42C1;">useDayjs</span><span style="color:#24292E;">(</span><span style="color:#032F62;">&#39;2012-01-01&#39;</span><span style="color:#24292E;">).</span><span style="color:#6F42C1;">get</span><span style="color:#24292E;">(</span><span style="color:#032F62;">&#39;month&#39;</span><span style="color:#24292E;">)</span></span>
<span class="line"><span style="color:#D73A49;">=&gt;</span><span style="color:#24292E;"> </span><span style="color:#005CC5;">0</span><span style="color:#24292E;"> </span><span style="color:#6A737D;">// 月份为 0 ~ 11</span></span></code></pre></div><h4 id="parameters-5" tabindex="-1">Parameters <a class="header-anchor" href="#parameters-5" aria-label="Permalink to &quot;Parameters&quot;">​</a></h4><table><thead><tr><th style="text-align:left;">Name</th><th style="text-align:left;">Type</th><th style="text-align:left;">Description</th></tr></thead><tbody><tr><td style="text-align:left;"><code>unit</code></td><td style="text-align:left;"><code>UnitType</code></td><td style="text-align:left;">时间单位</td></tr></tbody></table><h4 id="returns-5" tabindex="-1">Returns <a class="header-anchor" href="#returns-5" aria-label="Permalink to &quot;Returns&quot;">​</a></h4><p><code>number</code></p><hr><h3 id="set" tabindex="-1">set <a class="header-anchor" href="#set" aria-label="Permalink to &quot;set&quot;">​</a></h3><p>▸ <strong>set</strong>(<code>unit</code>, <code>value</code>): <a href="./core_useDayjs.WrapperDateFormat.html"><code>WrapperDateFormat</code></a>&lt;<code>C</code>&gt;</p><p>返回一个修改<code>day.js</code>对象后的包装器实例，支持链式调用。各个传入的单位对大小写不敏感，支持缩写和复数。</p><p><strong><code>Example</code></strong></p><div class="language-ts vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">ts</span><pre class="shiki github-dark vp-code-dark"><code><span class="line"><span style="color:#B392F0;">useDayjs</span><span style="color:#E1E4E8;">(</span><span style="color:#9ECBFF;">&#39;2020-1-1&#39;</span><span style="color:#E1E4E8;">).</span><span style="color:#B392F0;">set</span><span style="color:#E1E4E8;">(</span><span style="color:#9ECBFF;">&#39;year&#39;</span><span style="color:#E1E4E8;">, </span><span style="color:#79B8FF;">2012</span><span style="color:#E1E4E8;">).</span><span style="color:#B392F0;">set</span><span style="color:#E1E4E8;">(</span><span style="color:#9ECBFF;">&#39;month&#39;</span><span style="color:#E1E4E8;">, </span><span style="color:#79B8FF;">2</span><span style="color:#E1E4E8;">).</span><span style="color:#B392F0;">format</span><span style="color:#E1E4E8;">(</span><span style="color:#9ECBFF;">&#39;YYYY-MM-DD&#39;</span><span style="color:#E1E4E8;">)</span></span>
<span class="line"><span style="color:#F97583;">=&gt;</span><span style="color:#E1E4E8;"> </span><span style="color:#9ECBFF;">&#39;2012-03-01&#39;</span><span style="color:#E1E4E8;"> </span><span style="color:#6A737D;">// 月份为 0 ~ 11</span></span></code></pre><pre class="shiki github-light vp-code-light"><code><span class="line"><span style="color:#6F42C1;">useDayjs</span><span style="color:#24292E;">(</span><span style="color:#032F62;">&#39;2020-1-1&#39;</span><span style="color:#24292E;">).</span><span style="color:#6F42C1;">set</span><span style="color:#24292E;">(</span><span style="color:#032F62;">&#39;year&#39;</span><span style="color:#24292E;">, </span><span style="color:#005CC5;">2012</span><span style="color:#24292E;">).</span><span style="color:#6F42C1;">set</span><span style="color:#24292E;">(</span><span style="color:#032F62;">&#39;month&#39;</span><span style="color:#24292E;">, </span><span style="color:#005CC5;">2</span><span style="color:#24292E;">).</span><span style="color:#6F42C1;">format</span><span style="color:#24292E;">(</span><span style="color:#032F62;">&#39;YYYY-MM-DD&#39;</span><span style="color:#24292E;">)</span></span>
<span class="line"><span style="color:#D73A49;">=&gt;</span><span style="color:#24292E;"> </span><span style="color:#032F62;">&#39;2012-03-01&#39;</span><span style="color:#24292E;"> </span><span style="color:#6A737D;">// 月份为 0 ~ 11</span></span></code></pre></div><h4 id="parameters-6" tabindex="-1">Parameters <a class="header-anchor" href="#parameters-6" aria-label="Permalink to &quot;Parameters&quot;">​</a></h4><table><thead><tr><th style="text-align:left;">Name</th><th style="text-align:left;">Type</th><th style="text-align:left;">Description</th></tr></thead><tbody><tr><td style="text-align:left;"><code>unit</code></td><td style="text-align:left;"><code>UnitType</code></td><td style="text-align:left;">时间单位</td></tr><tr><td style="text-align:left;"><code>value</code></td><td style="text-align:left;"><code>number</code></td><td style="text-align:left;">时间数值</td></tr></tbody></table><h4 id="returns-6" tabindex="-1">Returns <a class="header-anchor" href="#returns-6" aria-label="Permalink to &quot;Returns&quot;">​</a></h4><p><a href="./core_useDayjs.WrapperDateFormat.html"><code>WrapperDateFormat</code></a>&lt;<code>C</code>&gt;</p><hr><h3 id="startof" tabindex="-1">startOf <a class="header-anchor" href="#startof" aria-label="Permalink to &quot;startOf&quot;">​</a></h3><p>▸ <strong>startOf</strong>(<code>unit</code>): <a href="./core_useDayjs.WrapperDateFormat.html"><code>WrapperDateFormat</code></a>&lt;<code>C</code>&gt;</p><p>返回给定时间开始的<code>day.js</code>对象包装器实例。</p><p><strong><code>Example</code></strong></p><div class="language-ts vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">ts</span><pre class="shiki github-dark vp-code-dark"><code><span class="line"><span style="color:#B392F0;">useDayjs</span><span style="color:#E1E4E8;">(</span><span style="color:#9ECBFF;">&#39;2012-12-21 00:00:00&#39;</span><span style="color:#E1E4E8;">).</span><span style="color:#B392F0;">startOf</span><span style="color:#E1E4E8;">(</span><span style="color:#9ECBFF;">&#39;month&#39;</span><span style="color:#E1E4E8;">).</span><span style="color:#B392F0;">value</span><span style="color:#E1E4E8;">()</span></span>
<span class="line"><span style="color:#F97583;">=&gt;</span><span style="color:#E1E4E8;"> </span><span style="color:#9ECBFF;">&#39;2012-12-01 00:00:00&#39;</span></span></code></pre><pre class="shiki github-light vp-code-light"><code><span class="line"><span style="color:#6F42C1;">useDayjs</span><span style="color:#24292E;">(</span><span style="color:#032F62;">&#39;2012-12-21 00:00:00&#39;</span><span style="color:#24292E;">).</span><span style="color:#6F42C1;">startOf</span><span style="color:#24292E;">(</span><span style="color:#032F62;">&#39;month&#39;</span><span style="color:#24292E;">).</span><span style="color:#6F42C1;">value</span><span style="color:#24292E;">()</span></span>
<span class="line"><span style="color:#D73A49;">=&gt;</span><span style="color:#24292E;"> </span><span style="color:#032F62;">&#39;2012-12-01 00:00:00&#39;</span></span></code></pre></div><h4 id="parameters-7" tabindex="-1">Parameters <a class="header-anchor" href="#parameters-7" aria-label="Permalink to &quot;Parameters&quot;">​</a></h4><table><thead><tr><th style="text-align:left;">Name</th><th style="text-align:left;">Type</th><th style="text-align:left;">Description</th></tr></thead><tbody><tr><td style="text-align:left;"><code>unit</code></td><td style="text-align:left;"><code>&quot;date&quot;</code> | <code>&quot;M&quot;</code> | <code>&quot;D&quot;</code> | <code>&quot;d&quot;</code> | <code>&quot;h&quot;</code> | <code>&quot;m&quot;</code> | <code>&quot;s&quot;</code> | <code>&quot;Q&quot;</code> | <code>&quot;w&quot;</code> | <code>&quot;millisecond&quot;</code> | <code>&quot;second&quot;</code> | <code>&quot;minute&quot;</code> | <code>&quot;hour&quot;</code> | <code>&quot;day&quot;</code> | <code>&quot;month&quot;</code> | <code>&quot;year&quot;</code> | <code>&quot;milliseconds&quot;</code> | <code>&quot;seconds&quot;</code> | <code>&quot;minutes&quot;</code> | <code>&quot;hours&quot;</code> | <code>&quot;days&quot;</code> | <code>&quot;months&quot;</code> | <code>&quot;years&quot;</code> | <code>&quot;dates&quot;</code> | <code>&quot;y&quot;</code> | <code>&quot;ms&quot;</code> | <code>&quot;quarter&quot;</code> | <code>&quot;quarters&quot;</code> | <code>&quot;week&quot;</code> | <code>&quot;weeks&quot;</code></td><td style="text-align:left;">时间单位</td></tr></tbody></table><h4 id="returns-7" tabindex="-1">Returns <a class="header-anchor" href="#returns-7" aria-label="Permalink to &quot;Returns&quot;">​</a></h4><p><a href="./core_useDayjs.WrapperDateFormat.html"><code>WrapperDateFormat</code></a>&lt;<code>C</code>&gt;</p><hr><h3 id="subtract" tabindex="-1">subtract <a class="header-anchor" href="#subtract" aria-label="Permalink to &quot;subtract&quot;">​</a></h3><p>▸ <strong>subtract</strong>(<code>value</code>, <code>unit</code>): <a href="./core_useDayjs.WrapperDateFormat.html"><code>WrapperDateFormat</code></a>&lt;<code>C</code>&gt;</p><p>返回减去一定时间的<code>day.js</code>对象包装器实例。</p><p><strong><code>Example</code></strong></p><div class="language-ts vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">ts</span><pre class="shiki github-dark vp-code-dark"><code><span class="line"><span style="color:#B392F0;">useDayjs</span><span style="color:#E1E4E8;">(</span><span style="color:#9ECBFF;">&#39;2012-12-21 00:00:00&#39;</span><span style="color:#E1E4E8;">).</span><span style="color:#B392F0;">subtractDate</span><span style="color:#E1E4E8;">(</span><span style="color:#79B8FF;">1</span><span style="color:#E1E4E8;">, </span><span style="color:#9ECBFF;">&#39;day&#39;</span><span style="color:#E1E4E8;">).</span><span style="color:#B392F0;">value</span><span style="color:#E1E4E8;">()</span></span>
<span class="line"><span style="color:#F97583;">=&gt;</span><span style="color:#E1E4E8;"> </span><span style="color:#9ECBFF;">&#39;2012-12-20 00:00:00&#39;</span></span></code></pre><pre class="shiki github-light vp-code-light"><code><span class="line"><span style="color:#6F42C1;">useDayjs</span><span style="color:#24292E;">(</span><span style="color:#032F62;">&#39;2012-12-21 00:00:00&#39;</span><span style="color:#24292E;">).</span><span style="color:#6F42C1;">subtractDate</span><span style="color:#24292E;">(</span><span style="color:#005CC5;">1</span><span style="color:#24292E;">, </span><span style="color:#032F62;">&#39;day&#39;</span><span style="color:#24292E;">).</span><span style="color:#6F42C1;">value</span><span style="color:#24292E;">()</span></span>
<span class="line"><span style="color:#D73A49;">=&gt;</span><span style="color:#24292E;"> </span><span style="color:#032F62;">&#39;2012-12-20 00:00:00&#39;</span></span></code></pre></div><h4 id="parameters-8" tabindex="-1">Parameters <a class="header-anchor" href="#parameters-8" aria-label="Permalink to &quot;Parameters&quot;">​</a></h4><table><thead><tr><th style="text-align:left;">Name</th><th style="text-align:left;">Type</th><th style="text-align:left;">Description</th></tr></thead><tbody><tr><td style="text-align:left;"><code>value</code></td><td style="text-align:left;"><code>number</code></td><td style="text-align:left;">时间数值</td></tr><tr><td style="text-align:left;"><code>unit</code></td><td style="text-align:left;"><code>&quot;date&quot;</code> | <code>&quot;M&quot;</code> | <code>&quot;D&quot;</code> | <code>&quot;d&quot;</code> | <code>&quot;h&quot;</code> | <code>&quot;m&quot;</code> | <code>&quot;s&quot;</code> | <code>&quot;Q&quot;</code> | <code>&quot;w&quot;</code> | <code>&quot;millisecond&quot;</code> | <code>&quot;second&quot;</code> | <code>&quot;minute&quot;</code> | <code>&quot;hour&quot;</code> | <code>&quot;day&quot;</code> | <code>&quot;month&quot;</code> | <code>&quot;year&quot;</code> | <code>&quot;milliseconds&quot;</code> | <code>&quot;seconds&quot;</code> | <code>&quot;minutes&quot;</code> | <code>&quot;hours&quot;</code> | <code>&quot;days&quot;</code> | <code>&quot;months&quot;</code> | <code>&quot;years&quot;</code> | <code>&quot;dates&quot;</code> | <code>&quot;y&quot;</code> | <code>&quot;ms&quot;</code> | <code>&quot;quarter&quot;</code> | <code>&quot;quarters&quot;</code> | <code>&quot;week&quot;</code> | <code>&quot;weeks&quot;</code></td><td style="text-align:left;">时间单位</td></tr></tbody></table><h4 id="returns-8" tabindex="-1">Returns <a class="header-anchor" href="#returns-8" aria-label="Permalink to &quot;Returns&quot;">​</a></h4><p><a href="./core_useDayjs.WrapperDateFormat.html"><code>WrapperDateFormat</code></a>&lt;<code>C</code>&gt;</p><hr><h3 id="value" tabindex="-1">value <a class="header-anchor" href="#value" aria-label="Permalink to &quot;value&quot;">​</a></h3><p>▸ <strong>value</strong>(): <a href="./../modules/core_useDayjs.html#dayjstypeto"><code>DayjsTypeTo</code></a>&lt;<code>C</code>&gt;</p><p>返回转换格式后的<code>day.js</code>实例值。</p><p><strong><code>Example</code></strong></p><div class="language-ts vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">ts</span><pre class="shiki github-dark vp-code-dark"><code><span class="line"><span style="color:#B392F0;">useDayjs</span><span style="color:#E1E4E8;">(</span><span style="color:#9ECBFF;">&#39;2012-12-21 00:00:00&#39;</span><span style="color:#E1E4E8;">, { convers: </span><span style="color:#9ECBFF;">&#39;timeStamp&#39;</span><span style="color:#E1E4E8;"> }).</span><span style="color:#B392F0;">value</span><span style="color:#E1E4E8;">()</span></span>
<span class="line"><span style="color:#F97583;">=&gt;</span><span style="color:#E1E4E8;"> </span><span style="color:#79B8FF;">1356019200000</span></span></code></pre><pre class="shiki github-light vp-code-light"><code><span class="line"><span style="color:#6F42C1;">useDayjs</span><span style="color:#24292E;">(</span><span style="color:#032F62;">&#39;2012-12-21 00:00:00&#39;</span><span style="color:#24292E;">, { convers: </span><span style="color:#032F62;">&#39;timeStamp&#39;</span><span style="color:#24292E;"> }).</span><span style="color:#6F42C1;">value</span><span style="color:#24292E;">()</span></span>
<span class="line"><span style="color:#D73A49;">=&gt;</span><span style="color:#24292E;"> </span><span style="color:#005CC5;">1356019200000</span></span></code></pre></div><h4 id="returns-9" tabindex="-1">Returns <a class="header-anchor" href="#returns-9" aria-label="Permalink to &quot;Returns&quot;">​</a></h4><p><a href="./../modules/core_useDayjs.html#dayjstypeto"><code>DayjsTypeTo</code></a>&lt;<code>C</code>&gt;</p>`,113),n=[l];function r(c,d,p,u,y,i){return t(),o("div",null,n)}const E=e(s,[["render",r]]);export{q as __pageData,E as default};
