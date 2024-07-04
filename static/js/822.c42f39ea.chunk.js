"use strict";(self.webpackChunkhooks=self.webpackChunkhooks||[]).push([[822],{85:(e,t,s)=>{s.d(t,{A:()=>o});const n={gradientColor:"SolidTitle_gradientColor__QDDGe",title3:"SolidTitle_title3__bxDK7 SolidTitle_gradientColor__QDDGe",distort:"SolidTitle_distort__LxmKO"};var i=s(270),l=s(43),r=s(579);function o(e){let{titleText:t}=e;const s=(0,l.useRef)(),o=(0,l.useCallback)((()=>{i.os.to("feDisplacementMap",1,{attr:{scale:0},ease:"circ.out"},1),i.os.to("feTurbulence",1,{attr:{baseFrequency:"2.01 .01"},ease:"circ.out"},1),i.os.to(s.current,1,{fontVariationSettings:"'wght' 700",ease:"back.out"},1)}),[]),a=(0,l.useCallback)((()=>{i.os.to("feDisplacementMap",1,{attr:{scale:100},ease:"circ.out"}),i.os.to("feTurbulence",1,{attr:{baseFrequency:"2.08 .08"},ease:"circ.out"},1),i.os.to(s.current,1,{fontVariationSettings:"'wght' 650",ease:"back.out"})}),[]);return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsxs)("h2",{className:n.title3,onMouseEnter:a,onMouseLeave:o,ref:s,children:[t," "]}),(0,r.jsx)("svg",{className:n.distort,children:(0,r.jsxs)("filter",{id:"distortionFilter",children:[(0,r.jsx)("feTurbulence",{type:"fractalNoise",baseFrequency:"2.01 .01",numOctaves:"5",seed:"2",stitchTiles:"noStitch",x:"0%",y:"0%",width:"100%",height:"100%",result:"noise"}),(0,r.jsx)("feDisplacementMap",{in:"SourceGraphic",in2:"noise",scale:"0",xChannelSelector:"R",yChannelSelector:"B",x:"0%",y:"0%",width:"100%",height:"100%",filterUnits:"userSpaceOnUse"})]})})]})}},629:(e,t,s)=>{s.d(t,{v:()=>i});var n=s(43);const i=(e,t)=>{const[s,i]=(0,n.useState)((()=>{var s;return null!==(s=JSON.parse(localStorage.getItem(e)))&&void 0!==s?s:t}));return(0,n.useEffect)((()=>{localStorage.setItem(e,JSON.stringify(s))}),[e,s]),[s,i]}},822:(e,t,s)=>{s.r(t),s.d(t,{default:()=>f});var n=s(43),i=s(73),l=s(579);class r extends n.Component{constructor(){super(...arguments),this.prodIdTitle=(0,i.A)(),this.prodIdDesc=(0,i.A)(),this.prodIdAgreed=(0,i.A)(),this.prodIdSize=(0,i.A)(),this.state={title:"",desc:"",agreed:!1,size:"",product:null},this.handleCheck=e=>{this.setState({agreed:!this.state.agreed})},this.handleChange=e=>{console.log(e.target.name,e.target.value),this.setState({[e.target.name]:e.target.value})},this.handleChangeAllInputs=()=>{const{name:e,type:t,checked:s,value:n}=this.state;this.setState({[e]:"checkbox"===t?s:n})},this.handleSubmit=e=>{e.preventDefault();const t={id:(0,i.A)(),title:this.state.title,desc:this.state.desc,size:this.state.size};this.setState({product:t}),this.props.addNewProduct(t),this.resetForm()},this.resetForm=()=>{this.setState({title:"",desc:"",size:"",agreed:!1})}}render(){const{title:e,desc:t,size:s,agreed:n}=this.state,{handleSubmit:i,handleChange:r,handleCheck:o}=this;return(0,l.jsxs)("form",{onSubmit:i,children:[(0,l.jsx)("label",{htmlFor:this.prodIdTitle,children:"Title"}),(0,l.jsx)("input",{type:"text",id:this.prodIdTitle,name:"title",value:e,onChange:r}),(0,l.jsx)("br",{}),(0,l.jsx)("label",{htmlFor:this.prodIdDesc,children:"Description"}),(0,l.jsx)("input",{type:"text",id:this.prodIdDesc,name:"desc",value:t,onChange:r}),(0,l.jsx)("br",{}),(0,l.jsx)("label",{htmlFor:this.prodIdSize,children:"Choose your size"}),(0,l.jsxs)("select",{name:"size",id:this.prodIdSize,value:s,onChange:r,children:[(0,l.jsx)("option",{value:"",disabled:!0,children:"..."}),(0,l.jsx)("option",{value:"s",children:"s"}),(0,l.jsx)("option",{value:"m",children:"m"}),(0,l.jsx)("option",{value:"l",children:"l"})]}),(0,l.jsx)("br",{}),(0,l.jsx)("label",{htmlFor:this.prodIdAgreed,children:"Agree?"}),(0,l.jsx)("input",{type:"checkbox",name:"agreed",id:this.prodIdAgreed,checked:n,onChange:o}),(0,l.jsx)("br",{}),(0,l.jsx)("button",{type:"submit",disabled:!n,children:"add"})]})}}const o="Modal_backDrop__cJY64",a="Modal_content__MMrtZ";var d=s(950);class c extends n.Component{constructor(){super(...arguments),this.handleEscape=e=>{"Escape"===e.code&&this.props.toggleModal()},this.handleClose=e=>{e.currentTarget===e.target&&this.props.toggleModal()}}componentDidMount(){window.addEventListener("keydown",this.handleEscape)}componentDidUpdate(){}componentWillUnmount(){window.removeEventListener("keydown",this.handleEscape)}render(){const{children:e}=this.props;return(0,d.createPortal)((0,l.jsx)("div",{className:o,onClick:this.handleClose,children:(0,l.jsx)("div",{className:a,children:e})}),document.getElementById("modalRoot"))}}const h={productItem:"ProductsList_productItem__e-oj+",productTitle:"ProductsList_productTitle__pPfTt",productDesc:"ProductsList_productDesc__r4eSo"};var u=s(294);function p(e){let{unitRef:t,isOpen:s,toggleState:n,keydownHandler:i,handleClick:r,handleDelete:o,textObj:{title:a,content:d,backBtn:c,deleteBtn:h}}=e;return(0,l.jsx)(u.lf,{flipId:"wrapper",children:(0,l.jsxs)("div",{ref:t,tabIndex:s?void 0:0,role:"dialog",className:"dialog animated-in",onClick:n,onKeyDown:i,children:[(0,l.jsx)("p",{className:"title content",children:a}),(0,l.jsx)("p",{className:"content",children:d}),(0,l.jsx)("button",{className:"button secondary content",onClick:r,children:c}),(0,l.jsx)("button",{className:"button primary content",onClick:o,children:h})]})})}p.defaultProps={textObj:{title:"Delete this item?",content:"This operation will permenantly delete this item and all its dependencies. This actioncannot be undone",backBtn:"Oh no, bring me back",deleteBtn:"I understand, delete it"}};class x extends n.Component{constructor(){super(...arguments),this.state={isOpen:this.props.isOpen},this.ref=(0,n.createRef)(),this.toggleState=()=>{this.state.isOpen||(this.setState((e=>({isOpen:!e.isOpen}))),this.ref.current.focus())},this.keydownHandler=e=>{"Enter"!==e.key&&"Escape"!==e.key||this.toggleState()},this.handleClick=()=>this.setState({isOpen:!1}),this.handleDelete=()=>{this.props.onDelete(this.props.id),this.setState({isOpen:!1})}}render(){const{isOpen:e}=this.state,{ref:t,keydownHandler:s,toggleState:n,handleClick:i,handleDelete:r}=this;return(0,l.jsx)(u.ZI,{flipKey:e,spring:"stiff",stagger:!0,children:e?(0,l.jsx)(p,{unitRef:t,isOpen:e,toggleState:n,keydownHandler:s,handleClick:i,handleDelete:r}):(0,l.jsx)(u.lf,{flipId:"wrapper",children:(0,l.jsx)("div",{ref:t,tabIndex:0,role:"button",className:"button primary",onClick:n,onKeyDown:s,children:(0,l.jsx)(u.lf,{flipId:"action",children:(0,l.jsx)("span",{className:"action",children:"Delete"})})})})})}}var g=s(85);function m(e){let{products:t,onDeleteProduct:s}=e;return(0,l.jsxs)(l.Fragment,{children:[(0,l.jsx)(g.A,{titleText:"Product List"}),(0,l.jsx)("ul",{children:t.map((e=>(0,l.jsxs)("li",{className:h.productItem,children:[(0,l.jsx)("h3",{className:h.productTitle,children:e.title}),(0,l.jsx)("p",{className:h.productDesc,children:e.desc}),(0,l.jsx)(x,{onDelete:s,id:e.id})]},e.id)))})]})}const j=e=>{const[t,s]=(0,n.useState)(e);return console.log("useTollle:",t),[t,()=>{s((e=>!e))}]};var b=s(629);function f(){const[e,t]=(0,b.v)("products",[]),[s,i]=j(!1),[o,a]=(0,n.useState)(""),d=(0,n.useMemo)((()=>{let t=o.toLowerCase();return e.filter((e=>e.title.toLowerCase().includes(t)))}),[o,e]);console.log(d);const h=(0,n.useCallback)((e=>{a(e.target.value)}),[]);return(0,l.jsxs)(l.Fragment,{children:[s&&(0,l.jsx)(c,{toggleModal:i,children:(0,l.jsx)(r,{addNewProduct:e=>t((t=>[...t,e]))})}),(0,l.jsx)("h1",{children:"Products"}),(0,l.jsx)("button",{type:"button",onClick:i,children:"Add Product"}),(0,l.jsx)("br",{}),(0,l.jsx)("label",{htmlFor:"filter",children:"Filter"}),(0,l.jsx)("br",{}),(0,l.jsx)("input",{type:"text",id:"filter",value:o,onChange:h}),(0,l.jsx)("br",{}),(0,l.jsx)(m,{products:d,onDeleteProduct:e=>t((t=>t.filter((t=>t.id!==e))))})]})}}}]);
//# sourceMappingURL=822.c42f39ea.chunk.js.map