var code = {
	'button-phstyle': '<Button>Primary</Button>\n<Button radius phStyle="info">Info</Button>\n<Button phStyle="success">Success</Button>\n<Button phStyle="error">Error</Button>\n<Button phStyle="danger">Danger</Button>\n<Button phStyle="warning">Warning</Button>\n<Button phStyle="gray">Gray</Button>\n<Button phStyle="link">Link</Button>',
	'button-phsize': '<Button>默认sm</Button>\n<Button phSize="md">md</Button>\n<Button phSize="lg">lg</Button>',
	'button-hollow': '<Button hollow>hollow</Button>',
	'button-radius': '<Button radius>radius</Button>',
	'button-block': '<Button block>block</Button>',
	'button-disabled': '<Button disabled>disabled</Button>',
	'button-active': '<Button active>active</Button>',

	'button-group-phtype-justify': '<ButtonGroup>\n\  <Button>justify1</Button>\n\  <Button>justify2</Button>\n\  <Button>justify3</Button>\n</ButtonGroup>',
	'button-group-phtype-tacked': '<ButtonGroup phType="tacked">\n\  <Button block>tacked1</Button>\n\  <Button block>tacked2</Button>\n\  <Button block>tacked3</Button>\n</ButtonGroup>',
	'button-group-callback': '<ButtonGroup activeCallback={(target,html)=>{console.log(target);alert(html);}}>\n\  <Button>justify1</Button>\n\  <Button>justify2</Button>\n\  <Button>justify3</Button>\n</ButtonGroup>',
	
	'icon-phicon': '<Icon phIcon="search" />\n<Icon className="icon-home" />\n<span className="gfs-icon icon-chevron-left"></span>',

	'star-rate': '<Star />\n<Star Rate={5} />\n<Star Rate={15} />\n<Star Rate={20} />\n<Star Rate={25} />\n<Star Rate={30} />\n<Star Rate={35} />',
	'star-phsize': '<Star Rate={40} phSize="sm" />\n<Star Rate={45} phSize="md" />\n<Star Rate={50} phSize="lg" />',

	'badge-phstyle': '<Badge>惠</Badge>\n<Badge phStyle="success">惠</Badge>\n<Badge phStyle="info">惠</Badge>\n<Badge phStyle="danger">惠</Badge>\n<Badge phStyle="error">惠</Badge>\n<Badge phStyle="warning">惠</Badge>',

	'label-phstyle': '<Label>惠</Label>\n<Label phStyle="success">惠</Label>\n<Label phStyle="info">惠</Label>\n<Label phStyle="danger">惠</Label>\n<Label phStyle="error">惠</Label>\n<Label phStyle="warning">惠</Label>',
	'label-phsize': '<Label>惠</Label>\n<Label phSize="md">惠</Label>\n<Label phSize="lg">惠</Label>',

	'input-text': '<Input placeholder="默认text" />\n<Input maxLength={20} defaultValue="设置最大长度maxLength" placeholder="请输入" />\n<Input type="text" defaultValue="默认值defaultValue" placeholder="请输入" />\n<Input type="text" value={this.state.name} onChange={::this.setValue.bind(this,"name")} placeholder="请输入" />\n '+
		'// setValue是设置value的函数 \n setValue(key,e){\n\  let o ={}; \n\  o[key || e.target.name] = e.target.value;\n\  this.setState(o);\n }',
	'input-radio': '<Input type="radio" label="男" name="sex" />\n<Input type="radio" label="女" name="sex" />',
	'input-checkbox': '<Input type="checkbox" label="苹果" />\n<Input type="checkbox" label="香蕉" defaultChecked={true} />\n<Input type="checkbox" label="西瓜" checked={this.state.checked} onChange={::this.onChange} />',

	'switch': '<Switch />\n<Switch defaultChecked={true} />\n<Switch checked={this.state.checked} onChange={::this.onChange} />',

	'textarea-count': '<Textarea placeholder="不计数..." />\n<Textarea count maxLength={this.state.MAX_LENGTH} placeholder="count配合maxLength计数..." />',
	'textarea': '<Textarea defaultValue={this.state.name} placeholder="请输入..." />\n<Textarea defaultValue={this.state.words} placeholder="请输入..." onChange={this.setValue.bind(this,"words")} />\n'+
		'// setValue是设置value的函数 \n setValue(key,e){\n\  let o ={}; \n\  o[key || e.target.name] = e.target.value;\n\  this.setState(o);\n }',

	'form-group-single': '<FormGroup>\n\  <Row single>\n\    <Col><Input type="text" placeholder="姓名" /></Col>\n\  </Row>\n</FormGroup>',
	'form-group-multiple': ' <FormGroup>\n\  <Row>\n\    <Col>\n\      <label>地址</label>\n\      <Input type="text" placeholder="地址" />\n\    </Col>\n\  </Row>\n\  '+
		'<Row>\n\    <Col>\n\      <label>省</label>\n\      <Input type="text" placeholder="省" />\n\    </Col>\n\    <Col>\n\      <label>市</label>\n\      <Input type="text" placeholder="市" />\n\    </Col>\n\  </Row>\n</FormGroup>',
	'form-group-a': '<FormGroup>\n\  <Row>\n\    <Col>\n\      <a href="javascript:;" className="ph-navigate-right">\n\        <label><span className="color-error">*</span>性别</label>\n\        <input type="text" placeholder="男/女" disabled/>\n\      </a>\n\    </Col>\n\  </Row>\n</FormGroup>',
	'form-group-input': '<FormGroup>\n\  <Row>\n\    <Col>\n\      <label>兴趣爱好</label>\n\      <Input type="checkbox" label="篮球" />\n\    </Col>\n\  </Row>\n\  '+
		'<Row>\n\    <Col>\n\      <label>喜欢的水果</label>\n\      <div style={{textAlign: "right"}}><Input type="radio" label="苹果" name="fruit" /><Input type="radio" label="香蕉" name="fruit" /></div>\n\    </Col>\n\  </Row>\n</FormGroup>',

	'accordion-visible': '<Accordion visible={true}>\n\  <Accordion.Header>标题二-展开</Accordion.Header>\n\  <Accordion.Body>...</Accordion.Body>\n</Accordion>',
	'accordion-onchange': '<Accordion visible={this.state.visible} onChange={(visible)=>{this.setState({visible: visible})}}>\n\  <Accordion.Header>...</Accordion.Header>\n\  <Accordion.Body>...</Accordion.Body>\n</Accordion>',

	'dialog-onclose': '<Dialog visible={this.state.visible1} onClose={::this.onClose.bind(this,"visible1")}>\n\  <Dialog.Title>标题1</Dialog.Title>\n\  <Dialog.Body>可自定义表格内容</Dialog.Body>\n\  <Dialog.Footer>...</Dialog.Footer>\n</Dialog>',
	'dialog-closebutton': '<Dialog visible={this.state.visible2} onClose={::this.onClose.bind(this,"visible2")} closeButton>\n\  <Dialog.Title>标题1</Dialog.Title>\n\  <Dialog.Body>可自定义表格内容</Dialog.Body>\n\  <Dialog.Footer>...</Dialog.Footer>\n</Dialog>',
	'dialog-shadowdisabled': '<Dialog visible={this.state.visible3} onClose={::this.onClose.bind(this,"visible3")} shadowDisabled>\n\  <Dialog.Title>标题1</Dialog.Title>\n\  <Dialog.Body>可自定义表格内容</Dialog.Body>\n\  <Dialog.Footer>...</Dialog.Footer>\n</Dialog>',

	'toast-info': '<Button phSize="lg" onClick={::this.showToast}>Toast</Button>\nshowToast(){\n\  Toast.info("只显示信息的toast！！", 2000,()=>{\n\    console.log("额外的执行内容");\n\  });\n}',

	'popup-top': '<Popup visible={this.state.visible} onClose={()=>{this.setState({visible:false});}}>\n\  // 弹层内容\n\  </Popup>',
	'popup-bottom': '<Popup align="bottom" visible={this.state.visible} onClose={()=>{this.setState({visible:false});}}>\n\  // 弹层内容\n\  </Popup>',

	'popover-placement': 'const popover = (\n\  <Popover>\n\    // 气泡内容\n\  </Popover>\n);\n'+
		'<Whisper target={popover}>Bottom</Whisper>\n<Whisper placement="top" target={popover}>Top</Whisper>\n<Whisper placement="right" target={popover}>Right</Whisper>\n<Whisper placement="left" target={popover}>Left</Whisper>\n<Whisper placement="top right" target={popover}>Top Right</Whisper>\n<Whisper placement="top left" target={popover}>Top Left</Whisper>\n<Whisper placement="bottom right" target={popover}>Bottom Right</Whisper>\n<Whisper placement="bottom left" target={popover}>Bottom Left</Whisper>',
	'popover-distance': 'const popover = (\n\  <Popover>\n\    // 气泡内容\n\  </Popover>\n);\n'+
		'<Whisper target={popover} distance={10}>10</Whisper>\n<Whisper target={popover} distance={20}>20</Whisper>',
	'popover-onchange': 'const popover = (\n\  <Popover>\n\    // 气泡内容\n\  </Popover>\n);\n'+
		'<Whisper onChange={()=>{alert("气泡出现消失时额外的执行函数");}} target={popover}>popover</Whisper>',

	'tabset-activeindex': '<Tabset activeIndex={1}>\n\  <Tab heading="标题1">\n\    横向内容1\n\  </Tab>\n\  <Tab heading="标题2">\n\    横向内容2\n\  </Tab>\n</Tabset>',
	'tabset-vertical': '<Tabset vertical>\n\  <Tab heading="标题1">\n\    竖向内容1\n\  </Tab>\n\  <Tab heading="标题2">\n\    竖向内容2\n\  </Tab>\n</Tabset>',
	'tabset-width': '<Tabset vertical width={30}>\n\  <Tab heading="标题1">\n\    竖向内容1\n\  </Tab>\n\  <Tab heading="标题2">\n\    竖向内容2\n\  </Tab>\n</Tabset>',
	'tabset-onchange': '<Tabset onChange={(index)=>{alert(index);}}>\n\  <Tab heading="标题1">\n\    横向内容1\n\  </Tab>\n\  <Tab heading="标题2">\n\    横向内容2\n\  </Tab>\n</Tabset>',
	'tab-heading': '<Tabset>\n\  <Tab heading="Tab heading 1">\n\    横向内容1\n\  </Tab>\n\  <Tab heading="Tab heading 2">\n\    横向内容2\n\  </Tab>\n</Tabset>',
	'tab-onchange': '<Tabset>\n\  <Tab heading="标题1" onChange={(index)=>{alert(index);}}>\n\    横向内容1\n\  </Tab>\n\  <Tab heading="标题2">\n\    横向内容2\n\  </Tab>\n</Tabset>',

	'slider-progress': '<Slider progress={25} />',
	'slider-placement': '<Slider />\n<Slider placement="bottom" />',
	'slider-onchange': '<Slider progress={this.state.progress} onChange={(newProgress)=>{this.setState({progress:newProgress})}} />',
	'slider-disabled': '<Slider disabled progress={10} />',

	'swipe-phstyle': '<Swipe buttons={[\n\  {text: "删除", onHandle: this.onDelete}\n]}>\n  <div style={{padding: "1rem"}}>滑动块2</div>\n</Swipe>',
	'swipe-buttons': '<Swipe buttons={[\n\  {text: "删除", onHandle: this.onDelete, phStyle: "error"},\n\  {text: "取消", onHandle: this.onCancle, phStyle: "info"}\n]}>\n  <div style={{padding: "1rem"}}>滑动块2</div>\n</Swipe>',

	'table-view-href': '<TableView>\n\  <a href="http://www.baidu.com">Item 1</a>\n</TableView>',
	'table-view-other-component': '<TableView>\n\  <a>Item 2 <Badge>2</Badge></a>\n\  <a href="###">Item 3 <Badge>5</Badge></a>\n\  <a>Item 4 <Switch /></a>\n</TableView>',

	'row-align': '<Row align="stretch">\n\  <Col>\n\    <div className="col-demo">stretch</div>\n\  </Col>\n\  <Col>\n\    <div className="col-demo">stretch<br />baseline</div>\n\  </Col>\n\  <Col>\n\    <div className="col-demo">stretch<br />stretch<br />stretch</div>\n\  </Col>\n</Row>',
	'col-align': '<Row>\n\  <Col align="top">\n\    <div className="col-demo">top</div>\n\  </Col>\n\  <Col align="center">\n\    <div className="col-demo">center</div>\n\  </Col>\n\  <Col align="bottom">\n\    <div className="col-demo">bottom</div>\n\  </Col>\n\  <Col>\n\    <div className="col-demo">top<br />center<br />bottom</div>\n\  </Col>\n</Row>',
	'col-width': '<Row>\n\  <Col width="15">\n\    <div className="col-demo">15</div>\n\  </Col>\n</Row>',
	'col-offset': '<Row>\n\  <Col width="20" offset="10">\n\    <div className="col-demo">10</div>\n\  </Col>\n</Row>',

	'animate': '<Animate transitionName="fade">\n\  {this.renderList()}\n</Animate>\n'+
		'this.state = {list: ["看一本书","睡8个小时"]}\nrenderList(){// 渲染todo list \n\  const items = this.state.list.map((item,index)=>{\n\    return <div key={index} className="animated" onClick={()=>{...}}>{item}</div>;\n\  });\n\  return items;\n}',
	'drag': '<Drag onDrag={::this.onDrag} onDrop={::this.onDrop} style={{height:0}}>\n\  <div className="box" ref={(box)=>{this.box = box}}>Drag</div>\n</Drag>\n'+
		'onDrag(event,position){\n\  // ...\n}\nonDrop(event,position){\n\  // ...\n}\n'
};

export default code;