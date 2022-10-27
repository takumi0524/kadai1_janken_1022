//画像にマウスがホバーしたときの挙動
//グー
$(function () {
    $(".rock").hover(function () {
        //マウスオーバーしたときの処理
        $(this).stop().animate({opacity:0.5},"fast");
    },function () {
        //マウスアウトしたときの処理
        $(this).stop().animate({opacity:1},"fast");
    });
  });
//チョキ
  $(function () {
    $(".scissors").hover(function () {
        //マウスオーバーしたときの処理
        $(this).stop().animate({opacity:0.5},"fast");
    },function () {
        //マウスアウトしたときの処理
        $(this).stop().animate({opacity:1},"fast");
    });
  });
  //パー
  $(function () {
    $(".paper").hover(function () {
        //マウスオーバーしたときの処理
        $(this).stop().animate({opacity:0.5},"fast");
    },function () {
        //マウスアウトしたときの処理
        $(this).stop().animate({opacity:1},"fast");
    });
  });


//ランダムに画像を表示し続ける
//➀HTMLのimgTestクラスの子の先頭に<img src="">を追加//
     $('<img src="" >').prependTo('.imgTest');
 
//➁画像のパスを変数に格納//
     let jpg1 = "image/fist_01.jpg";
     let jpg2 = "image/choki_01.jpg";
     let jpg3 = "image/pa_01.jpg";


//ここからランダムに画像を表示し続ける機能↓

    const randomimg = setInterval(function(){

        //⓷0.3秒ごとにランダムに画像を表示し続ける
    var random =Math.floor(Math.random()*3);
    // console.log(random,"ランダムな数字");

    if (random === 0){
        $('.imgTest > img').attr('src', jpg1); 
    }else if (random === 1 ){
        $('.imgTest > img').attr('src', jpg2); 
    }else if (random === 2 ){
        $('.imgTest > img').attr('src', jpg3); 
    }

    const janken_1 = $(".rock");
    janken_1.click(function () {
        setTimeout(function(){
            //画像がランダムに表示されているのを止める
            clearInterval(randomimg);
            //1秒後に止めた直後のrandom変数を拾って、表示される画像＝randomでリンクさせる
            //(clearInterval直後でないと表示画像と差異がでてしまう)
            if (random === 0){
                $('.imgTest > img').attr('src', jpg1); 
            }else if (random === 1 ){
                $('.imgTest > img').attr('src', jpg2); 
            }else if (random === 2 ){
                $('.imgTest > img').attr('src', jpg3); 
            }

            setTimeout(function(){
                if (random === 0){
                    $(".kekka").text("あいこだよ");
                    // $(".btn-reset").prop("disabled", false);
                    // $(".reload").text("あいこで…！？（5秒後にグー・チョキ・パーを選んでね）");
                    // ↓if文の中でだけやりたかったのにできなかった。
                    // setTimeout(function(){
                    //     location.reload();
                    // },5000);
                    $(".btn-reset").prop("disabled", false);
                }else if (random === 1 ){
                    $(".kekka").text("君の勝ち！");
                    $(".btn-reset").prop("disabled", false);
                }else if (random === 2 ){
                    $(".kekka").text("君の負け！");
                    $(".btn-reset").prop("disabled", false);
                }
            },1000)
        },1000)
    });

    const janken_2 = $(".scissors");
    janken_2.click(function () {
        setTimeout(function(){
            //画像がランダムに表示されているのを止める
            clearInterval(randomimg);
            if (random === 0){
                $('.imgTest > img').attr('src', jpg1); 
            }else if (random === 1 ){
                $('.imgTest > img').attr('src', jpg2); 
            }else if (random === 2 ){
                $('.imgTest > img').attr('src', jpg3); 
            }

            setTimeout(function(){
                if (random === 0){
                    $(".kekka").text("君の負け！");
                    $(".btn-reset").prop("disabled", false);
                }else if (random === 1 ){
                    $(".kekka").text("あいこだよ");
                    $(".btn-reset").prop("disabled", false);
                }else if (random === 2 ){
                    $(".kekka").text("君の勝ち！");
                    $(".btn-reset").prop("disabled", false);
                }
            },1000)
        },1000)
    });

    const janken_3 = $(".paper");
    janken_3.click(function () {
        setTimeout(function(){
            //画像がランダムに表示されているのを止める
            clearInterval(randomimg);
            if (random === 0){
                $('.imgTest > img').attr('src', jpg1); 
            }else if (random === 1 ){
                $('.imgTest > img').attr('src', jpg2); 
            }else if (random === 2 ){
                $('.imgTest > img').attr('src', jpg3); 
            }

            setTimeout(function(){
                if (random === 0){
                    $(".kekka").text("君の勝ち！");
                    $(".btn-reset").prop("disabled", false);
                }else if (random === 1 ){
                    $(".kekka").text("君の負け！");
                    $(".btn-reset").prop("disabled", false);
                }else if (random === 2 ){
                    $(".kekka").text("あいこだよ");
                    $(".btn-reset").prop("disabled", false);
                }
            },1000)
        },1000)
    });
  },150)

  $(".btn-reset").click(function(){
    location.reload();
  })


//if文使う
//クリックイベント使う
//jQuary使う


//ホバーしたときに画像強調
//じゃんけん結果が出たときのアニメーションを付ける
//→結果出るときに過程がないと非常にわかりにくい(勝負した感じが出ない)
