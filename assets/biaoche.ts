// Learn TypeScript:
//  - https://docs.cocos.com/creator/manual/en/scripting/typescript.html
// Learn Attribute:
//  - https://docs.cocos.com/creator/manual/en/scripting/reference/attributes.html
// Learn life-cycle callbacks:
//  - https://docs.cocos.com/creator/manual/en/scripting/life-cycle-callbacks.html

const { ccclass, property } = cc._decorator;

@ccclass
export default class NewClass extends cc.Component {
  @property
  duration: number = 7;

  @property
  angle: number = -45;
  @property
  distance: number = 1000;
  // LIFE-CYCLE CALLBACKS:

  // onLoad () {}

  start() {
    cc.resources.loadDir("biaoche", cc.SpriteFrame, (err, asset: cc.SpriteFrame[]) => {
      console.log(asset);
      var clip = cc.AnimationClip.createWithSpriteFrames(asset, asset.length);
      clip.name = "biaoche";

      clip.wrapMode = cc.WrapMode.LoopReverse;
      var anim = this.addComponent(cc.Animation);
      // anim.currentClip = clip;
      // anim.defaultClip = clip;
      anim.addClip(clip);
      anim.play("biaoche");
      let hudu = (this.angle / 180) * Math.PI;
      let x = this.distance * Math.cos(hudu);
      let y = this.distance * Math.sin(hudu);
      console.log(this.angle, hudu, x, y);
      cc.tween(this.node)
        .repeatForever(
          cc
            .tween(this.node)
            .by(this.duration, {
              x,
              y,
            })
            .by(0, {
              x: -x,
              y: -y,
            })
        )
        .start();
    });
  }

  // update (dt) {}
}
