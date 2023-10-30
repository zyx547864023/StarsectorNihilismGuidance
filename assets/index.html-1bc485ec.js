import{_ as t,o as a,c as e,e as d}from"./app-78621c03.js";const n={},s=d(`<h1 id="初步支持势力争霸" tabindex="-1"><a class="header-anchor" href="#初步支持势力争霸" aria-hidden="true">#</a> 初步支持势力争霸</h1><p><em>本节预期阅读时间：~5 分钟。</em></p><p><em>本节预期操作时间：~10 分钟。</em></p><h2 id="势力配置" tabindex="-1"><a class="header-anchor" href="#势力配置" aria-hidden="true">#</a> 势力配置</h2><p>势力争霸的势力文件配置集中于<code>data/config</code>文件夹内。<strong>下列提及的所有文件夹或文件都不在框架内，请自行创建</strong>。</p><h3 id="data-config-exerelin-文件夹" tabindex="-1"><a class="header-anchor" href="#data-config-exerelin-文件夹" aria-hidden="true">#</a> data\\config\\exerelin 文件夹</h3><p>对于势力配置而言，此文件夹内包含<code>corvus_spawnpoints.csv</code>一个 CSV 文件。</p><div class="custom-container tip"><p class="custom-container-title">古早遗留</p><p><code>corvus_capitals.csv</code>文件现已无意义，不应保留，应当删除。</p></div><p><code>corvus_spawnpoints.csv</code>用于控制玩家选择该势力时的出生点，它看上去是这样的：</p><div class="language-csv line-numbers-mode" data-ext="csv"><pre class="language-csv"><code><span class="token value">faction</span><span class="token punctuation">,</span><span class="token value">system</span><span class="token punctuation">,</span><span class="token value">entityID</span>
<span class="token value">#machine name</span><span class="token punctuation">,</span><span class="token value">#human name</span><span class="token punctuation">,</span><span class="token value">#machine name</span>
<span class="token value">gear_industry</span><span class="token punctuation">,</span><span class="token value">Nipher</span><span class="token punctuation">,</span><span class="token value">GearIn_planet1</span>
</code></pre><div class="highlight-lines"><br><br><div class="highlight-line"> </div></div><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>从左至右分别为势力 ID、星系名、星球 ID。</p><h3 id="data-config-exerelinfactionconfig-文件夹" tabindex="-1"><a class="header-anchor" href="#data-config-exerelinfactionconfig-文件夹" aria-hidden="true">#</a> data\\config\\exerelinFactionConfig 文件夹</h3><p>对于势力配置而言，此文件夹内包含<code>mod_factions.csv</code>和一个自定义的 JSON 文件。</p><p><code>mod_factions.csv</code>用于注册势力，它看上去是这样的：</p><div class="language-csv line-numbers-mode" data-ext="csv"><pre class="language-csv"><code><span class="token value">faction</span>
<span class="token value"># case sensitive!!!</span>
<span class="token value">gear_industry</span>
</code></pre><div class="highlight-lines"><br><br><div class="highlight-line"> </div></div><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>而同目录下则应当新建一个以势力 ID 为文件名的 JSON 文件，参考成品范例或其它 MOD 同目录下的文件修改即可。</p><h3 id="势力争霸势力文件配置速查表" tabindex="-1"><a class="header-anchor" href="#势力争霸势力文件配置速查表" aria-hidden="true">#</a> 势力争霸势力文件配置速查表</h3><p><strong>不在本表上的数据均为不常用项目，请自行寻找参考。</strong></p><table><thead><tr><th>英文</th><th>实际意义</th></tr></thead><tbody><tr><td>playableFaction</td><td>是否可被玩家选择</td></tr><tr><td>corvusCompatible</td><td>是否可兼容原版星域。如果不设为 true，则后续无法继续进行兼容</td></tr><tr><td>marketSpawnWeight</td><td>在随机星域模式下的殖民地生成倍率</td></tr><tr><td>colonyExpeditionChance</td><td>建立新殖民地的频率倍率</td></tr><tr><td>colonyTargetValuator</td><td>建立新殖民地的价值考虑，通常填写<code>exerelin.campaign.colony.IndustrialColonyTargetValuator</code></td></tr><tr><td>startRelationships</td><td>原版星域模式下的初始关系</td></tr><tr><td>maxRelationships</td><td>与某些势力可允许的最大关系</td></tr><tr><td>minRelationships</td><td>与某些势力可允许的最小关系</td></tr><tr><td>diplomacyPositiveChance</td><td>与某些势力的正面事件频率倍率</td></tr><tr><td>diplomacyNegativeChance</td><td>与某些势力的负面事件频率倍率</td></tr><tr><td>diplomacyTraits</td><td>势力特性，参考势力争霸的<code>data\\config\\exerelin\\factionTraits.json</code></td></tr><tr><td>alignments</td><td>势力倾向</td></tr><tr><td>startShipsSolo</td><td>单舰开局的舰船装配</td></tr><tr><td>startShipsCombatSmall</td><td>小型军事舰队开局的舰船装配</td></tr><tr><td>startShipsCombatLarge</td><td>大型军事舰队开局的舰船装配</td></tr><tr><td>startShipsTradeSmall</td><td>小型贸易舰队开局的舰船装配</td></tr><tr><td>startShipsTradeLarge</td><td>大型贸易舰队开局的舰船装配</td></tr><tr><td>startShipsCarrierSmall</td><td>小型航母舰队开局的舰船装配</td></tr><tr><td>startShipsCarrierLarge</td><td>大型航母舰队开局的舰船装配</td></tr><tr><td>startShipsSuper</td><td>超级单舰开局的舰船装配</td></tr><tr><td>startSpecialItems</td><td>开局后提供的物品，通常来说是蓝图包 ID，第二个空留空</td></tr><tr><td>defenceStations</td><td>使用的空间站设施类型</td></tr><tr><td>industrySeeds</td><td>殖民地自动发展时建立设施的比率</td></tr><tr><td>bonusSeeds</td><td>殖民地开局的设施设置</td></tr></tbody></table><h2 id="杂项配置" tabindex="-1"><a class="header-anchor" href="#杂项配置" aria-hidden="true">#</a> 杂项配置</h2><p>更多杂项配置请参考势力争霸的<code>data\\config\\exerelin</code>文件夹。</p><p><strong>在进行上述配置后，您的势力依然无法在势力争霸下正常运作</strong>。因为距离它完成还需要一些关键的代码工作，这些代码工作将不可避免地涉及封装等进阶操作，因此将在后文介绍。</p>`,22),i=[s];function r(c,o){return a(),e("div",null,i)}const p=t(n,[["render",r],["__file","index.html.vue"]]);export{p as default};