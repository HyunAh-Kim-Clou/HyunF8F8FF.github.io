# Github Blog

# Github Website 관리

![github_webpage_structure.png](github_webpage_structure.png)

[https://youtu.be/2MsN8gpT6jY](https://youtu.be/2MsN8gpT6jY)

[[offcial] GitHub Pages](https://pages.github.com/)

# Github Blog 관리

[[GITHUB 사용법] 왕초보를 위한 깃허브사용법 (Git사용법)](https://tagilog.tistory.com/377)

[ET-Jekyll](http://jekyllthemes.org/themes/et-jekyll/)

[Git 초보자를 위한 Github Desktop 활용편](https://engineering-skcc.github.io/github%20pages/github-pages-desktop/)

## <a> 태그 스타일 수정

```css
.a:link {
    color: black;
    text-decoration: none;
}
.a:visited {
    color: purple;
    text-decoration: none;
}
.a:hover {
    color: blue;
    text-decoration: underline;
}
```

[(HTML) a태그 파란색 및 밑줄 없애기](https://it77.tistory.com/126)

## JSON local 파일 가져오기

같은 디렉터리에 존재하는 Json 데이터를 가져와보자.

Json 데이터를 .JS파일로 감싸서 저장한다.

```jsx
// JSON 데이터 저장
const proj_list = [
    {   
        "name": "papago",
        "plink": "https://papago.naver.com/"
    }, {
        "name": "css_flexbox",
        "plink": "https://developer.mozilla.org/ko/docs/Web/CSS/CSS_Flexible_Box_Layout/Flexbox%EC%9D%98_%EA%B8%B0%EB%B3%B8_%EA%B0%9C%EB%85%90"
    }
]
```

위의 JS파일을 html파일에 포함한다.

```html
<!-- resource-proj.js: json데이터가 저장된 JS파일 -->
<script src="resource-proj.js"></script>
<script src="main-projlink.js"></script>
```

그러면 다른 JS파일에서 proj_list로 접근할 수 있다.

```jsx
function loadProjs() {
		// 저장된 변수명을 사용하여 접근
    projs = proj_list;
    projs.forEach(element => 
        addProj(element.name, element.plink));
}
```

[ 추가 참고사이트 ]

[JSON으로 작업하기](https://developer.mozilla.org/ko/docs/Learn/JavaScript/Objects/JSON)

[[D3.js] JSON 파일 읽는법](https://codeda.tistory.com/211)