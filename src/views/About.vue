<template>
  <div class="about">
    <div class="ourStory">
      <el-row>
        <el-col :span="16">
          <h2><mark class="mark">品牌故事</mark></h2>
          <small>"Hey! Together? We two, together!"</small>
          <p>那是一段刻苦的時光，因為家裡人不鼓勵我研究所繼續攻讀一樣的領域，起了爭執後的我決定義無反顧地踏上了英國留學的路，由於匆匆借了點錢就直接飛了過去，起初的三個月，扣掉生活費和學費後所剩寥寥無幾，身處異鄉的我也沒有什麼朋友，每天只能以泡麵度日。</p>
          <p>在聖誕節的前後，學校有了幾天的連假，趁著這個機會想說要好好體會一下英國的聖誕節氣氛，於是我就這樣晃了晃來到了泰晤士河畔，映著周遭燈光的氣氛人人都是兩兩成對，心裡頭難免有點吃味，當時的我好不容易存了筆小錢，但若要上倫敦眼（London Eye）一張一千多元的門票費，要再多吃兩個禮拜的泡麵是我再怎麼咬緊牙關也過不去的，而在這佳節門票是絕對有折扣的，"Buy one, get one free"，無奈在英國的日子我第一缺的是錢，第二缺的就是朋友，在外頭拍了幾張照片後，決定回到那比聖誕夜更寒冷的租屋處，就在此時，一位看似大學生年紀的女子叫住了我，"Hey! Together? We two, together!"，在我會意過來後心中不禁一股暖意油然而生，那是在英國最溫暖的一個夜晚，即使河畔當時正飄著點小雪。</p>
          <p>後來她(Yumi)才告訴我說她是從日本過來的，背景基本上跟我差不多，同時也在準備離開時發現了我，決定鼓起勇氣問我要不要一起。經過這件事後，我時不時在想如何也能幫助到那些跟我們一樣的人，於是這個網站就這樣誕生了，「Two-Gether，一個由Caleb和Yumi偕同創建的邊緣人交友平台」</p>
          <span>--Caleb</span>
        </el-col>
        <el-col :span="8">
          <img src="https://images.unsplash.com/photo-1570967692283-7c9bbd78579d?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=564&q=80" alt="">
        </el-col>
      </el-row>
    </div>
    <div class="joinUs">
      <el-row>
        <el-col :span="8">
          <img src="https://images.unsplash.com/photo-1587751395859-9fa4224678a1?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=632&q=80" alt="">
        </el-col>
        <el-col :span="16">
          <h2><mark class="mark">加入我們</mark></h2>
          <small>"We want you! Join us today!"</small>
          <p>在這裡的每一位男孩女孩（以下我們稱之為邊友）曾經或許也跟你一樣，希望能找個一起出去玩的伴，在加入我們之後滿足了原本的期待之外也增添了一份對自我的認同感，如果你也希望能夠幫助到那些無助的邊緣人們，同時也享受與人交流的時光（尤其是與陌生人），歡迎加入我們的行列。</p>
          <p>我們Two-gether平台並不以營利為目的，故我們的服務售價是很低的，並只與邊友收取微薄的金額做為仲介的費用，以維持平台營運及志工付出的時間成本，這意味著加入我們雖然不能賺到多少錢，但在與跟我們消費的客人出去玩的同時也能獲得最基本的工資，因此我們希望你若有意願加入我們，能夠用一百萬分的用心來對待我們的客人，因為這也是你的工作。除了工資以外，我們還有引以為傲的員工福利，這方面就先讓小編保密囉～有興趣者我們會在信件中予以說明。</p>
          <p>有意願者歡迎投遞簡單的履歷到我們的email，你不用有很厲害的履歷，但請好好的向我們介紹你自己，Two-Gether持續召集志同道合的邊友中！<br><br>此外，若是有其他方面的合作意願者，也可以來信告知我們你的需求唷！</p>
          <span>--Two-gether團隊</span>
        </el-col>
      </el-row>
    </div>
    <div class="commitment">
      <el-row>
        <el-col :span="16">
          <h2><mark class="mark">五大承諾</mark></h2>
          <small>We have been committed to delivering the best service</small>
          <h3>給消費者的五大承諾：</h3>
          <ul>
            <li>我們不會向邊友透漏您的個資</li>
            <li>若是有額外的需求我們能協助你與邊友溝通</li>
            <li>在指定日期當天的72小時以前，若因故要取消合約，能無條件完全退費</li>
            <li>若是被邊友侵犯時可以立即中止合約，我們也會協助了解狀況</li>
            <li>如果當天有不滿意邊友之處，在活動結束後72小時內提出合理原因，可予以退費50%</li>
          </ul>
          <h3>給邊友的五大承諾：</h3>
          <ul>
            <li>工作使用我們公司給予的line來聯絡顧客，我們不會向顧客透漏你的個資</li>
            <li>協助你與顧客溝通，讓你不用第一時間面對顧客</li>
            <li>在指定日期當天的72小時以前，若能提出合理原因，我們能協助你跟顧客取消合約</li>
            <li>若是被顧客侵犯時可以立即中止合約，我們也會協助了解狀況</li>
            <li>保障一定的工時及勞健保</li>
          </ul>
          <span>--Two-gether團隊</span>
        </el-col>
        <el-col :span="8">
          <img src="https://images.unsplash.com/photo-1564544430321-8d0eb062b11e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=564&q=80" alt="">
        </el-col>
      </el-row>
    </div>
  </div>
</template>

<style lang="scss">
  .about{
    .el-row{
      padding: 40px;
      height: 100vh;
      border-bottom: 1px solid #F5F5F5;
    }
    .el-col{
      height: 100%;
      line-height: 1.3rem;
      img{
        width: 100%;
        height: 100%;
      }
    }
    h2{
      font-size: 20px;
      color: black;
      font-weight: 600;
      margin-bottom: 10px;
      .mark{
        background: linear-gradient(transparent 40%,rgba(255,255,255,0) 40%, #ffd571 90%,transparent 95%);
        padding: 2px 1px;
      }
    }
  }
  .ourStory{
    small{
      font-size: 14px;
      font-style: italic;
    }
    p{
      margin: 20px 20px 0 0;
      &::first-letter{
        font-size: 20px;
        font-weight: 600;
      }
    }
    span{
      display: block;
      float: right;
      margin: 15px 20px 0 0;
      font-style: italic;
      font-weight: 600;
    }
    img{
      border-bottom-right-radius: 50px;
      border-top-left-radius: 20px;
    }
  }
  .joinUs{
    h2{
      margin-left: 20px;
    }
    small{
      font-size: 14px;
      font-style: italic;
      margin-left: 20px;
    }
    p{
      margin: 20px 0 0 20px;
      &::first-letter{
        font-size: 20px;
        font-weight: 600;
      }
    }
    span{
      display: block;
      float: right;
      margin-top: 50px;
      font-style: italic;
      font-weight: 600;
    }
    img{
      border-bottom-left-radius: 50px;
      border-top-right-radius: 20px;
    }
  }
  .commitment{
    small{
      font-size: 14px;
      font-style: italic;
    }
    h3{
      margin-top: 30px;
      font-weight: 600;
    }
    ul{
      margin-top: 20px;
    }
    li{
      list-style-type: square;
    }
    span{
      display: block;
      float: right;
      margin: 50px 20px 0 0;
      font-style: italic;
      font-weight: 600;
    }
    img{
      border-bottom-right-radius: 50px;
      border-top-left-radius: 20px;
    }
  }
</style>
