// Learn TypeScript:
//  - https://docs.cocos.com/creator/manual/en/scripting/typescript.html
// Learn Attribute:
//  - https://docs.cocos.com/creator/manual/en/scripting/reference/attributes.html
// Learn life-cycle callbacks:
//  - https://docs.cocos.com/creator/manual/en/scripting/life-cycle-callbacks.html

const { ccclass, property } = cc._decorator;

@ccclass
export default class NewClass extends cc.Component {
  // LIFE-CYCLE CALLBACKS:

  // onLoad () {}

  start() {
    var Camera = cc.find("Canvas/camera");
    var nextBtn = cc.find("Canvas/btn_next");
    nextBtn.addComponent(cc.Button);

    nextBtn.on("click", () => {
      nextBtn.active = false;
      cc.tween(Camera)
        .by(2, {
          y: -600
        })
        .start();
    });
  }

  // update (dt) {}
}
