# 虚无主义教程(Nihilism Guidance)

*本节预期阅读时间：~3 分钟。*

## 前言

您好。

**这是一份支持 远行星号 0.95.1a (Starsector 0.95.1a) 的 MOD 教程**，旨在帮助制作一个基本的远行星号 MOD。

相信很多玩家在经历了或浅或深的游玩之后，抱着各种各样的心情希望创作出一些属于自己的内容。**无论是打算在远行星号社区创造一段令人尊敬的历史，亦或是有大大小小的愿望想要达成，哪怕只是想做一艘[天下无敌的舰船](https://www.fossic.org/thread-1562-1-1.html)放烟花，您在初学者阶段都会需要一份教程来助您入门**。

**如果您觉得本教程太长了，您可以只看黑色加粗的精简摘要，其它部分稍后再作了解**。而对于本教程的一切评价 —— **编者不在乎**，编者只是想做它，于是就做它。请谨记，你、我、他、它、这个游戏、这个社区，都不过是一片虚无、一场幻梦罢了。

::: details 碎碎念

**您能找到的其它教程并不足够兼具完全正确且省时高效**。编者曾考虑过这段教程的多种表现形式。但奈何在贴吧更新容易被打断、在论坛更新则因系统老旧不便于维护、作为腾讯文档来编写则难以供参考查阅、做成视频信息密度极低，因此本教程以基于 VuePress 的网页制作。您可能从一个运行中的网站看到本教程，亦或是离线版。

:::

## 我需要什么？

**制作 MOD 几乎没有任何门槛**，您在掌握基本技巧之后完全可以自定义您的附加内容。

::: tip 技能要求？

**贴图**：即使没有拿得出手的作品，您也可以用原版裁剪拼接进行替代。只要不随意挪用其它 MOD 贴图或版权素材，就不违反任何法律、规定或用户协议。

**代码**：您几乎不会在这个初级阶段接触到灵活的代码，只需要复制黏贴原版的开放代码或本教程提供的代码即可。

**音频**：您可以在网络公开素材库寻找音频，或直接使用原版音频。

**写作**：您不必拥有相当于一名小说家的储备，您只需要最基本的文字描述能力即可撰写基础但看得过去的文本。

**英文水准**：您只需要熟悉使用[百度翻译](https://fanyi.baidu.com/)即可。

**游戏水准**：制作 MOD 这个行为本身并不要求多高的游戏水准。即使您想要做一个优秀的作品而无法确定自己是否有能力驾驭可玩性，您也可以先尝试后更新修正，毕竟您现在看到的大多数老牌 MOD 都已经更新了数年之久，而它们一开始未必像现在这样优秀。

**设计水准**：优秀的设计如凤毛麟角，如果您的要求不高，简单朴素一些的 MOD 也是可能被玩家接受的。

:::

只需要按照本教程，**即使您缺乏技能也可以制作一个完整、可运行的，带有舰船、武器、插件、战术系统、生涯星系等内容的 MOD，而如果您具有技能则往往还可以做得更好**。制作 MOD 的过程还是对上述所提到的各类能力的锻炼，作为起步并无不妥。

虽然在技能方面几乎没有要求，但在心态上是有的。

::: tip 心态要求？

**您最不需要的是因“一时脑热”而催生的盲目热情或过度自信**。初学者制作 MOD 的过程往往不会特别顺利，初步成品也往往达不到最初想象中的预期，但即使如此，创作过程会令人产生自己“无所不能”的错觉，请您注意调节心态。

**您最需要的是“知道自己做出来的东西到底是什么”的判断力**。就算往极端来说，您做了一个设计上非常糟糕的奇怪舰船或奇怪武器，那么只要您知道并承认它是这样的东西，那么这个做法就可以接受——否则这不利于您的水平提升，也不利于您与其他人交流时的名望。

:::

## 制作需要多久？

**即使您此前完全没有基础与概念，制作一个具备上述一切内容的 MOD 也只需要 2 天**。虽然它的质量未必令人满意，但这也足以说明制作 MOD 本身不是一件难事，普通玩家眼中的“大佬”其实非常好当。

本指南将根据制作阶段性进行章节排布，**在最初阶段安排所有的基础舰船、战机、武器、战术系统、船插等内容，在下一阶段安排所有的势力、生涯生成、文本补充等内容**。编者默认您在完成上述阶段后进行了更多简单创作或试错来增加熟练度，因此下一步会直接从其他方向开始。

**在完成基础舰船后，下一阶段将用以介绍稍显进阶但依然不需要多少技术力的内容**。比如模拟战与标题演示、舰船风格与引擎风格、模块船、势力争霸支持、尾迹、音效设置。然后就到了真正的代码部分，编者默认您在完成上述内容后，在[此处](https://www.runoob.com/java/java-tutorial.html)或类似的地方学习了`基本 Java 语法`并安装了一种叫`IDEA`的工具，因此下一步会直接涉及代码部分。

**最早先涉及代码的阶段会用以介绍各类此前被一笔带过的战斗中进阶特性，包括常用代码接口**。这将包括所有战斗中常见 API；战斗每帧、战斗渲染每帧、生涯每帧等每帧全家桶的介绍；武器命中/光束本身特效的介绍、战术系统/战术系统 AI/舰船插件的介绍等。

**而下一阶段则会用以介绍各类生涯进阶特性，包括常用代码接口**。这将包括所有生涯常见 API；大地图每帧、大地图监听器、特性/殖民地设施的介绍、酒吧(与事件链)的编写、rules 操作的介绍等。

**最后的几个阶段将用于介绍社区最为流行的三前置与部分不得不涉及代码的复杂 MOD 适配**。善用三前置等同于站在巨人的肩膀上，能极其有效地改善代码效率、轻松实现一些独自难以实现或麻烦的功能。

然后，本教程就结束了。在贴图到位的情况下，共计耗时往往不会超过一个月。

**不过，一个真正精工细造的 MOD 往往需要至少 1 年(考虑到您还有生活与其它事情去做)来完善**。相较于粗制滥造然后自以为是，精细打磨才是真正值得尊敬的做法。

## 准备开始

除了上述信息之外，您还会至少需要 2 个工具。

* `舰船编辑器` ([点此下载](https://www.fossic.org/thread-1605-1-1.html))
* `VS Code` ([百度](http://b.iou.ink/?q=dnNjb2RlIOS4i+i9vQ==)，并下载安装，然后在它的内部安装`Rainbow CSV`插件)

这就够了，我们可以开始了。

## 交流讨论？

也许您会认为与他人沟通想法可以提供灵感，应该尽快寻找组织，**但编者认为未必**。

**请仔细想想，如果您只是一个连本教程都没有看完的新人，没有制作经验，甚至不清楚最基本的制作流程，那您可以交流讨论什么**？讨论本身就是意见的碰撞，若是您还没有形成属于自己的体验和理解，那就很难产生什么有价值的意见或很难理解其他人的意见。**所以在与他人分享您的灵感之前，请至少学习本教程的前 2 天内容**。

其次，在交流讨论的过程中，难免会在自我展示的时候受到或善意或无意或捧杀的称赞。**如果您的内心不够坚定、判断力不足，那您可能会这种吹嘘和追捧之中迷失**，进而失去对质量的追求，在他人“大佬”的称呼中迷失对水准的认识。

更有甚者，**毕竟制作 MOD 本身是高度主观化、意见化的过程，如果一个 MOD 制作讨论群是以一个 MODDER 为首的小群、甚至是他的个人群，而不是去中心化的，那么这个群本质上也不过只是由这个人主导的舆论场，技术交流价值往往只会随着群内讨论内容日益低级而降低**。

::: details 如果您看完上面几段之后依然坚持认为自己需要一个交流的地方...

* 远行星号 Mod制作讨论群(QQ 群)：`484278834`
  * 水准较为基础的 MOD 技术/展示 群，整体水平不算高，但和其它群比起来也依然强太多了。
  * **和其它群最大的不同是，您不用担心话题跑偏到键政、私生活和愤世嫉俗的魔怔抨击上**。
  * 适合希望提高自己水准而不是享受廉价吹捧的新作者。
  * 学好提问的艺术，做好接受各类言论的准备。



而如果您有需要与编者直接交流的需求，您可以直接联系编者的 QQ `2858844688`。

编者自己现在不在任何一个 MOD 制作交流群内。

:::

## 创作/支持者名单

主编：**Nihilist**

审校/帮助部署：**AnyIDElse**

技术支持：**AnyIDElse**、**AutumnHeart**、**Jaylyn**

***

最终/一切解释权归 **Nihilist** 所有。