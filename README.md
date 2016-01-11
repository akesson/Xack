# Xack
The X-platform Stack. 

This is an opensource project for evaluating a modern web-stack for doing a cross-platform [fat client](https://en.wikipedia.org/wiki/Fat_client) for Android, iOS, Windows, Mac and Linux. 

It shall be a no-compromise fat client meaning that:
* It cannot depend on a server (beacuse on mobile you can't assume having a network connection)
* The user interface shall be immersive and with a great quality based on [Material Design](https://www.google.com/design/spec/material-design/introduction.html).
* It shall break the [1000ms mobile barrier](http://alistapart.com/blog/post/breaking-the-1000ms-time-to-glass-mobile-barrier)

The approach is to start targeting mainly modern operating systems and browsers and then work backwards to improve the support.

The stack that will be tested consists of:
* [Mithril](https://github.com/lhorie/mithril.js) - A super-lightweight virtual DOM MVC client framework.
* [TypeScript](http://www.typescriptlang.org/) - Finally a real language instead of (on top of) JavaScript.
