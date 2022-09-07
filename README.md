# 내일의 집

### 1. GNB (Global Navigation Bar)

- 로그인을 하지 않은 경우
![image](https://user-images.githubusercontent.com/80025366/188829975-0428e551-57cf-4d62-a699-4a2433966798.png)

```html
<div class="button-group">
    <button
      type="button"
      aria-label="검색창 열기 버튼"
      class="lg-hidden gnb-icon-button is-search"
    >
        <i class="ic-search"></i>
    </button>

    <a href="/" class="gnb-icon-button is-cart">
        <i class="ic-cart"></i>
    </a>

    <div class="sm-hidden gnb-auth">
        <a href="/">로그인</a>
        <a href="/">회원가입</a>
    </div>
</div>
```
<br/>

- 로그인을 한 경우
![image](https://user-images.githubusercontent.com/80025366/188829862-8fc5b77e-8607-42fe-8543-6c9a40676820.png)

```html
<div class="button-group">
    <button
      type="button"
      aria-label="검색창 열기 버튼"
      class="lg-hidden gnb-icon-button is-search"
    >
        <i class="ic-search"></i>
    </button>

    <a
      href="/"
      aria-label="스크랩북 페이지로 이동"
      class="sm-hidden gnb-icon-button is-scrap"
    >
        <i class="ic-bookmark"></i>
    </a>

    <a
      href="/"
      aria-label="내 소식 페이지로 이동"
      class="sm-hidden gnb-icon-button is-bell"
    >
        <i class="ic-bell"></i>
    </a>

    <a
      href="/"
      aria-label="장바구니 페이지로 이동, 5개의 상품이 장바구니에 담겨 있습니다."
      class="gnb-icon-button is-cart"
    >
        <i class="ic-cart"></i>
        <strong class="badge">5</strong>
    </a>

    <button
      type="button"
      aria-label="마이메뉴 열기 버튼"
      class="sm-hidden gnb-avatar-button"
    >
        <div class="avatar-32">
            <img src="./assets/images/img-user-01.jpg" alt="사달라 아저씨" />
        </div>
    </button>
</div>
```
