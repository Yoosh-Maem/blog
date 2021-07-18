import React from "react";
import ReactMarkdown from "react-markdown";
import MainHeader from "../../components/MainHeader";
import Sidebar from "../../components/Sidebar";
import Rightbar from "../../components/Rightbar";
import { render } from "react-dom";
import "../../components/common.css";
import ReactMarkDownEditor from "../../components/ReactMarkDownEditor";

const JsIndex0 = () => {
  const input = `## 0. 시작하기 앞서
  <p>
  node.js를 알아가는 데 중요한 것은 딱 두 가지이다.
  
  1. 싱글 스레드이며 비동기 방식
  2. 자바스크립트 기반
  </p>
  <p>
  FE뿐 아니라 BE 또한 자바스크립트로 작성할 수 있다는 것이 큰 장점. 이 점 때문에 Node.js의 성장세가 계속된다.
  </p><br>
  
  ### 0-1. 자바스크립트란?
  <p>
  웹 페이지의 동작을 담당한다. 동적으로 콘텐츠를 바꾸고 멀티미디어, 움직이는 이미지 등 웹 페이지를 꾸며주도록 도와준다.
  </p>
  <p>
  자바스크립트는 객체 기반 스크립트 프로그래밍 언어로서 주로 웹 개발에 많이 사용되는 것으로 알려져 있지만, 다른 응용프로그램의 내장 객체에도 접근할 수 있는 기능도 가지기에 응용 범위가 무궁무진하다.
  </p>
  <p>
  오늘날 우리가 자주 사용하는 구글, 페이스북, 트위터, 네이버 등에서 개발한 각종 웹 어플리케이션과 서비스는 모두 자바스크립트와 AJAX 기술을 사용하여 구현한 것이다.
  </p>
  <p>
  React Native, PhoneGap, Ionic 등과 같은 하이브리드 모바일 어플리케이션 개발 프레임워크들은 자바스크립트로 작성한 모바일 어플리케이션을 iOS와 Android를 대상으로 동시 동작할 수 있도록 지원한다.
  <p>
  Unity 3D 게임엔진과 자바스크립트를 활용해서 플랫폼을 가리지 않는 게임 개발이 가능하다.
  </p>
  </p>
  <p>
  이밖에도 자바스크립트의 영향력은 필드 전반에 걸쳐 강력하다. Node.js 또한 자바스크립트를 이용하는 개발 플랫폼이다.
  </p><br>
  
  ### 0-2. 자바스크립트의 특징
  <p>
  동적 웹페이지를 만드는 언어는 JS 외에도 JSP, Servlet, ASP 등 많다. 이 중에서 자바스크립트를 가장 많이 쓰는 이유는, 자바스크립트는 웹 브라우저(클라이언트 측)에서 실행되는 반면 다른 나머지들은 서버에서 실행되고 결과를 HTML로 변환하여 보여주는 방식으로 자바스크립트의 실행 속도가 더 빠르기 때문이다.
  </p>
  
  #### 동적 형변환
  <p>
  다른 스크립트 언어들이 그렇듯 JS 역시 값에 따라 변수의 형변환이 자동으로 이루어진다.
  </p>
  
  \`\`\`javascript
  var i = 1;
  var ch = "a";
  consol.log(i+ch);
  ch = 1;
  console.log(i+ch);
  \`\`\`
  \`\`\`
  1a
  2
  \`\`\`
  
  #### 프로토타입 기반 객체 지향(Prototypal Object-Oriented)
  <p>
  객체 생성 시 클래스로부터 그 내용을 상속받아 객체를 만드는 것이 아니라, 객체로부터 특성을 복제하여 새 객체를 생성하기 때문에 런타임 중 객체의 속성과 값의 추가, 변경, 삭제가 가능하다.
  </p>
  
  \`\`\`javascript
  var person = { name:"David Ki", age:24 }; 
  console.log(person);
  // Object
  //  age: 24
  //  name: "David Ki"
  //  __proto__: Object
    
  person.height = 187;
  console.log(person);
  // Object
  //  age: 24
  //  name: "David Ki"
  //  height: 187
  //  __proto__: Object
  \`\`\`
  \`\`\`
  { name: 'David Ki, age: 24 }
  { name: 'David Ki', age: 24, height: 187 }
  \`\`\`
  
  #### 실행 시 평가
  <p>
  프로그램 실행 시 코드 블록을 실행할 수 있는 eval() 함수와 같은 요소를 지니기 때문에 프로그램 실행 도중 동적으로 코드 실행이 가능하다.
  </p>
  
  \`\`\`javascript
  eval("var a = 1, b = 2;");
  console.log(a, b);
  \`\`\`
  \`\`\`
  1 2
  \`\`\`
  </p>
  
  #### 고차 함수
  <p>
  고차 함수는 인자로서 함수를 취하거나, 반환 값으로 함수를 반환할 수 있는 함수를 일컫는다.
  </p>
  <p>
  JS에서 다른 언어에서는 불가능한 방식으로 함수들을 쉽게 조작할 수 있다.
  </p>
  
  \`\`\`javascript
  // ho_func는 고차 함수. 인자로 param_func 함수를 받으면 param_func 함수를 실행하는 함수를 반환한다.
  var ho_func = function (param_func) { param_func(); };
  ho_func(function () { console.log("hello !"); });
  \`\`\`
  \`\`\`
  hello !
  \`\`\`
  <br>
  
  ### 0-3. 자바스크립트 엔진이란?
  <p>개발자가 작성한 자바스크립트 코드를 해석하고 실행시켜주는 것이 자바스크립트 엔진으로, 가능한 짧은 시간 내에 가장 최적화된 코드를 생성하는 것을 목표로 한다.</p>
  <p>자바스크립트 코드를 실행하는 프로그램 혹은 인터프리터를 일컫는다. 표준 인터프리터로 구현할 수도, 바이트 코드로 컴파일하는 JIT 컴파일러로 구현할 수 있다. 주로 웹 브라우저를 위해 사용된다.</p>
  <p>특정 버전의 ECMAScript를 구현하기 때문에 ECMAScript가 발전하는 만큼 엔진도 발전한다. 서로 다른 웹 브라우저, Node.js와 같은 런타임 등에서 동작하도록 많은 엔진이 만들어졌다.</p>
  
  #### 자바스크립트 엔진의 종류
  - V8 - 오픈소스로 구글에서 개발했다. C++로 작성되었고 구글 크롬과 Node.js에서 사용된다. 가장 유명한 엔진.
  - SpiderMonkey - 최초의 자바스크립트 엔진. 지금은 모질라 파이어폭스에 사용된다.
  - Rhino - 모질라 재단에서 운영, 오픈소스이고 자바로 개발되었다.
  - JavaScriptCore, Chakra, Nashron, JerryScript 등등`;

  return (
    <div className="wrapper">
      <MainHeader />
      <div className="container">
        <Sidebar />
        <div className="contents">
          <ReactMarkDownEditor text={input} />
        </div>
        <Rightbar/>
      </div>
    </div>
  );
};

export default JsIndex0;
