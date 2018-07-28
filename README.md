# slickissue
Reproducible environment of bug

This project demonstrates how to wrap an ES6 module inside a web component.
There is a "core" file in addition to a "component" one, because the Javascript unit test tools currently do not support web component APIs.
So, by moving most of the logic into a "core" file, it is much easier to write unit tests.
