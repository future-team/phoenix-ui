var code = {
	'button-phstyle': '<Button>Primary</Button>\n<Button radius phStyle="info">Info</Button>\n<Button phStyle="success">Success</Button>\n<Button phStyle="error">Error</Button>\n<Button phStyle="danger">Danger</Button>\n<Button phStyle="warning">Warning</Button>\n<Button phStyle="gray">Gray</Button>\n<Button phStyle="link">Link</Button>',
	'button-phsize': '<Button>默认sm</Button>\n<Button phSize="md">md</Button>\n<Button phSize="lg">lg</Button>',
	'button-hollow': '<Button hollow>hollow</Button>',
	'button-radius': '<Button radius>radius</Button>',
	'button-block': '<Button block>block</Button>',
	'button-disabled': '<Button disabled>disabled</Button>',
	'button-active': '<Button active>active</Button>',
	'button-phicon': '<Button phIcon="search">phIcon</Button>',
	'button-stable':'<Button phIcon="search" block stable>文字居中</Button>',

	'button-group-phtype-default':'<ButtonGroup>\n\  <Button phSize="lg">确定</Button>\n\  <Button phSize="lg" phStyle="gray" hollow >取消</Button>\n</ButtonGroup>',
	'button-group-phtype-justify': '<ButtonGroup phType="justify">\n\  <Button>justify1</Button>\n\  <Button>justify2</Button>\n\  <Button>justify3</Button>\n</ButtonGroup>',
	'button-group-phtype-segmente':'<ButtonGroup phType="segmente">\n\  <Button>标签1</Button>\n\  <Button>标签2</Button>\n\  <Button>标签3</Button>\n</ButtonGroup>',
	'button-group-phtype-tacked': '<ButtonGroup phType="tacked">\n\  <Button block>tacked1</Button>\n\  <Button block>tacked2</Button>\n\  <Button block>tacked3</Button>\n</ButtonGroup>',
	'button-group-index':'<ButtonGroup phType="justify" index={1}>\n\  <Button>justify1</Button>\n\  <Button>justify2</Button>\n\  <Button>justify3</Button>\n</ButtonGroup>',
	'button-group-callback': '<ButtonGroup clickCallback={(target,html)=>{console.log(target);alert(html);}}>\n\  <Button>justify1</Button>\n\  <Button>justify2</Button>\n\  <Button>justify3</Button>\n</ButtonGroup>',
	
	'icon-phicon': '<Icon phIcon="search" />\n<Icon className="icon-home" />\n<span className="gfs-icon icon-chevron-left"></span>',
	'icon-phsize':'<Icon phIcon="tip" phSize="xs" />\n<Icon phIcon="tip" phSize="sm" />\n<Icon phIcon="tip" phSize="md" />\n<Icon phIcon="tip" phSize="lg" />\n<Icon phIcon="tip" phSize="xlg" />',
	'icon-phstyle':'<Icon phIcon="search" phStyle="primary" />\n<Icon phIcon="search" phStyle="info" />\n<Icon phIcon="search" phStyle="success" />',
	'icon-other':'<Icon phIcon="loading-white" />\n<Icon phIcon="loading-gray" />',

	'star-rate': '<Star />\n<Star rate={5} />\n<Star rate={15} />\n<Star rate={20} />\n<Star rate={25} />\n<Star rate={30} />\n<Star rate={35} />',
	'star-phsize': '<Star rate={40} phSize="sm" />\n<Star rate={45} phSize="md" />\n<Star rate={50} phSize="lg" />',

	'badge-phstyle': '<Badge>1</Badge>\n<Badge>10</Badge>\n<Badge>Hot</Badge>\n\n<Badge phStyle="primary">惠</Badge>\n<Badge phStyle="success">惠</Badge>\n<Badge phStyle="info">惠</Badge>\n<Badge phStyle="danger">惠</Badge>\n<Badge phStyle="error">惠</Badge>\n<Badge phStyle="warning">惠</Badge>',

	'label-phlabel':'<Label phLabel="zu"/>\n<Label phLabel="tuan"/>\n<Label phLabel="fu"/>\n<Label phLabel="cu"/>\n<Label phLabel="quan"/>\n<Label phLabel="shou"/>\n<Label phLabel="piao"/>\n<Label phLabel="ding"/>\n<Label phLabel="jia"/>\n<Label phLabel="yin"/>\n<Label phLabel="ka"/>\n<Label phLabel="wai"/>\n<Label phLabel="dian"/>\n<Label phLabel="pin"/>\n<Label phLabel="ke"/>\n<Label phLabel="pai"/>\n<Label phLabel="huo"/>',
	'label-phstyle': '<Label phLabel="tuan"/>\n<Label phLabel="ke" phStyle="info"/>\n<Label phLabel="ding" phStyle="success"/>\n<Label phLabel="cu" phStyle="tip"/>\n<Label phLabel="huo" phStyle="calm"/>\n<Label phLabel="ka" phStyle="light"/>\n<Label phLabel="zu" phStyle="gray"/>',
	'label-phsize': '<Label phLabel="pai"/>\n<Label phLabel="pai" phSize="md"/>',

	'input-text': '<Input placeholder="请输入"/>\n<Input placeholder="请输入" value="默认值" clear />\n<Input placeholder="请输入" value="不可编辑的情况" disabled/>',
	'input-search':'<Input type="search" placeholder="请输入" />\n<Input type="search" placeholder="请输入" value="可清空输入的文字" clear />\n<Input type="search" placeholder="请输入" value="不可编辑的情况" disabled />',
	'input-password':'<Input type="password" placeholder="请输入" />\n<Input type="password" value="123456" clear />\n<Input type="password" value="123456" placeholder="请输入" clear visible />',
	'input-clear':'<Input type="text" value="123456" clear />',
	'input-visible':'<Input type="password" value="123456" visible />',
	'input-error':'<Input type="text" value="123456" error />',
	'input-phicon':'<Input type="text" placeholder="请输入" phIcon="search" />\n<Input type="search" placeholder="请输入" phIcon="search" />\n<Input type="text" value="123456" placeholder="请输入" phIcon="search" />\n<Input type="search" value="123456" placeholder="请输入" phIcon="search" />',
	'input-phreg':'<Input type="text" placeholder="6-18位不以数字开头的用户名" phReg={/^[a-zA-Z$_]\w{5,17}$/} />',
	'input-getvalue':'<Input placeholder="默认text" ref={(inputElem)=>{this.inputElem = inputElem}} />\n this.inputElem.getValueCallback()',

	'checkbox-default':'<Checkbox label="香蕉" defaultChecked={true} />',
	'checkbox-onchange':'onCheckboxChange(){\n\  this.setState({\n\    checkboxChecked: !this.state.checkboxChecked\n\  });\n}\n...\n<Checkbox label="西瓜" checked={this.state.checkboxChecked} onChange={::this.onCheckboxChange} />',
	'checkbox-disabled':'<Checkbox label="西瓜" disabled/>',

	'radio-default':'<Radio label="男" name="sex2" defaultChecked={true}/>\n<Radio label="女" name="sex2"/>',
	'radio-onchange':'onRadioChange(){\n\  this.setState({\n\    radioChecked: !this.state.radioChecked\n\  });\n}\n...\n<Radio label="男" name="sex3" checked={this.state.radioChecked} onChange={::this.onRadioChange}/>\n<Radio label="女" name="sex3" checked={!this.state.radioChecked} onChange={::this.onRadioChange}/>',
	'radio-disabled':'<Radio label="男" name="sex4" disabled />\n<Radio label="女" name="sex4" disabled />',

	'switch': '<Switch />\n<Switch defaultChecked={true} />\n<Switch checked={this.state.checked} onChange={::this.onChange} />\n<Switch disabled />',

	'textarea-count': '<Textarea count maxLength={this.state.MAX_LENGTH} placeholder="count配合maxLength计数..." />',
	'textarea-value': '<Textarea value="我是默认值" placeholder="请输入..." />',
	'textarea-disabled':'<Textarea value="我是默认值" placeholder="请输入..." disabled/>',
	'textarea-getvalue':'<Textarea placeholder="默认text" ref={(textElem)=>{this.textElem = textElem}} />\nthis.textElem.getValueCallback()',

	'form-group-single': '<FormGroup>\n\  <Row single>\n\    <Col><Input type="text" placeholder="姓名" /></Col>\n\  </Row>\n</FormGroup>',
	'form-group-multiple': ' <FormGroup>\n\  <Row>\n\    <Col>\n\      <label>地址</label>\n\      <Input type="text" placeholder="地址" />\n\    </Col>\n\  </Row>\n\  '+
		'<Row>\n\    <Col>\n\      <label>省</label>\n\      <Input type="text" placeholder="省" />\n\    </Col>\n\    <Col>\n\      <label>市</label>\n\      <Input type="text" placeholder="市" />\n\    </Col>\n\  </Row>\n</FormGroup>',
	'form-group-a': '<FormGroup>\n\  <Row>\n\    <Col>\n\      <a href="javascript:;" className="ph-navigate-right">\n\        <label><span className="color-error">*</span>性别</label>\n\        <input type="text" placeholder="男/女" disabled/>\n\      </a>\n\    </Col>\n\  </Row>\n</FormGroup>',
	'form-group-input': '<FormGroup>\n\  <Row>\n\    <Col>\n\      <label>兴趣爱好</label>\n\      <Input type="checkbox" label="篮球" />\n\    </Col>\n\  </Row>\n\  '+
		'<Row>\n\    <Col>\n\      <label>喜欢的水果</label>\n\      <div style={{textAlign: "right"}}><Input type="radio" label="苹果" name="fruit" /><Input type="radio" label="香蕉" name="fruit" /></div>\n\    </Col>\n\  </Row>\n</FormGroup>',

	'accordion-visible': '<Accordion visible={true}>\n\  <Accordion.Header>标题二-展开</Accordion.Header>\n\  <Accordion.Body>...</Accordion.Body>\n</Accordion>',
	'accordion-clickcallback': '<Accordion visible={this.state.visible} clickCallback={(visible)=>{this.setState({visible: visible})}}>\n\  <Accordion.Header>...</Accordion.Header>\n\  <Accordion.Body>...</Accordion.Body>\n</Accordion>',
	'accordion-hideicon':'<Accordion hideIcon>\n\  <Accordion.Header>标题一</Accordion.Header>\n\  <Accordion.Body>...</Accordion.Body>\n</Accordion>',

	'dialog-closecallback': '<Dialog visible={this.state.visible1} closeCallback={this.closeCallback.bind(this,"visible1")}>\n\  <Dialog.Title>标题1</Dialog.Title>\n\  <Dialog.Body>可自定义表格内容</Dialog.Body>\n\  <Dialog.Footer>...</Dialog.Footer>\n</Dialog>',
	'dialog-closebutton': '<Dialog visible={this.state.visible2} closeCallback={this.closeCallback.bind(this,"visible2")} closeButton>\n\  <Dialog.Title>标题1</Dialog.Title>\n\  <Dialog.Body>可自定义表格内容</Dialog.Body>\n\  <Dialog.Footer>...</Dialog.Footer>\n</Dialog>',
	'dialog-shadowdisabled': '<Dialog visible={this.state.visible3} closeCallback={this.closeCallback.bind(this,"visible3")} shadowDisabled>\n\  <Dialog.Title>标题1</Dialog.Title>\n\  <Dialog.Body>可自定义表格内容</Dialog.Body>\n\  <Dialog.Footer>...</Dialog.Footer>\n</Dialog>',
	
	'prompt':'<Prompt visible={this.state.visible} onClose={::this.onClose.bind(this,"visible")} \n title="这是标题" content="这里是弹出框的内容..." \n confirmCallback={(inputValue)=>{ console.log(inputValue); this.onClose("visible"); }} />',
	'prompt-buttons':'const buttons = [\n\  // text默认"确定", phStyle默认primary，onHandle默认onClose, otherProps传按钮的属性\n\  {text: "取消", phStyle: "gray", otherProps: {hollow: true}, onHandle: this.confirmCallback.bind(this)}, \n\  {text: "提交", onHandle: this.confirmCallback.bind(this)}\n];'+
        '\n ... \n<Prompt buttons={buttons} visible={this.state.visible} onClose={::this.onClose.bind(this,"visible")} \n title="这是标题" content="这里是弹出框的内容..."/>',
	'prompt-inputs':'const inputs = [\n\  // type默认text，其他属性可选，按照正常输入; \n\  {defaultValue: "hah", placeholder: "用户名", maxLength: 10, onChange: this.onUserNameChange.bind(this)},\n\  {type: "password", placeholder: "密码", onChange: this.onPasswordChange.bind(this)}\n];'+
		'\n ... \n<Prompt inputs={inputs} visible={this.state.visible} onClose={::this.onClose.bind(this,"visible")} \n title="这是标题" content="这里是弹出框的内容..." \n confirmCallback={(inputValue)=>{ console.log(inputValue); this.onClose("visible"); }} />',
	'prompt-whole':'<Prompt visible={this.state.visible} onClose={::this.onClose.bind(this,"visible")} \n closeButton shadowDisabled title="这是标题" content="这里是弹出框的内容..." \n confirmCallback={(inputValue)=>{ console.log(inputValue); this.onClose("visible"); }} />',

	'alert':'<Alert visible={this.state.visible} closeCallback={()=>{this.setState(visible:false)}} title="这是标题" content="这里是弹出框的内容..." />',
	'alert-buttons':'const buttons = [\n\   // text默认"确定", phStyle默认primary，onHandle默认closeCallback\n\  {text: "取消", phStyle: "gray", otherProps: {hollow: true}},\n\  {onHandle: this.confirmCallback.bind(this,"visible")}\n];\n...\n<Alert visible={this.state.visible} closeCallback={this.closeCallback.bind(this,"visible")} title="这是标题" content="这里是弹出框的内容..." buttons={buttons} />',
	'alert-whole':'const buttons = [\n\   // text默认"确定", phStyle默认primary，onHandle默认closeCallback\n\  {text: "取消", phStyle: "gray", otherProps: {hollow: true}},\n\  {onHandle: this.confirmCallback.bind(this,"visible")}\n];\n...\n<Alert closeButton shadowDisabled visible={this.state.visible} closeCallback={this.closeCallback.bind(this,"visible")} title="这是标题" content="这里是弹出框的内容..." buttons={buttons} />',

	'toast-info': '<Button phSize="lg" onClick={::this.showToast}>Toast</Button>\n...\nshowToast(){\n\  Toast.info("只显示信息的toast！！", 2000,()=>{\n\    console.log("额外的执行内容");\n\  });\n}',
	'toast-success': '<Button phSize="lg" onClick={::this.showToast}>Toast</Button>\n...\nshowToast(){\n\  Toast.success("操作成功", 2000,()=>{\n\    console.log("额外的执行内容");\n\  });\n}',
	'toast-fail': '<Button phSize="lg" onClick={::this.showToast}>Toast</Button>\n...\nshowToast(){\n\  Toast.fail("操作失败", 2000,()=>{\n\    console.log("额外的执行内容");\n\  });\n}',
	'toast-tip':'<Button phSize="lg" onClick={::this.showToast}>Toast</Button>\n...\nshowToast(){\n\  Toast.tip("操作提示", 2000,()=>{\n\    console.log("额外的执行内容");\n\  });\n}',
	'toast-loading': '<Button phSize="lg" onClick={::this.showToast}>Toast</Button>\n...\nshowToast(){\n\  Toast.loading("加载中...", 2000,()=>{\n\    console.log("额外的执行内容");\n\  });\n}',
	'toast-remove':'Toast.info("只显示信息的toast！", false, null);\n....\nToast.remove();',

	'popup-top': '<Popup visible={this.state.visible} closeCallback={()=>{this.setState({visible:false});}}>\n\  // 弹层内容\n\  </Popup>',
	'popup-bottom': '<Popup align="bottom" visible={this.state.visible} closeCallback={()=>{this.setState({visible:false});}}>\n\  // 弹层内容\n\  </Popup>',

	'popover-gettarget':'<Button phSize="lg" ref={(button)=>{this.button = button}}>纯文字气泡</Button>\n<Popover getTarget={()=>{return this.button}}>\n\  <div className="ph-popover-text">\n\    一条很长的很长的气泡提示语，为了占位存在的气泡提示语。一条很长的很长的气泡提示语，为了占位存在的气泡提示语。一条很长的很长的气泡提示语，为了占位存在的气泡提示语。一条很长的很长的气泡提示语，为了占位存在的气泡提示语。\n\  </div>\n</Popover>\n\n' + 
		'<Button phSize="lg" ref={(button)=>{this.button1 = button}}>列表气泡</Button>\n<Popover getTarget={()=>{return this.button1}} placement="right">\n\  <ul className="ph-popover-list">\n\    <li className="ph-popover-item">未上线单店</li>\n\    <li className="ph-popover-item">未上线连锁店</li>\n\  </ul>\n</Popover>',
	'popover-placement':'<Button phSize="lg" ref={(button)=>{this.button2 = button}}>按钮</Button>\n<Popover getTarget={()=>{return this.button2}} placement="top">\n\  <div className="ph-popover-text">\n\    为了占位存在的气泡提示语。\n\  </div>\n</Popover>',
	'popover-distance':'<Button phSize="lg" ref={(button)=>{this.button3 = button}}>按钮</Button>\n<Popover getTarget={()=>{return this.button3}} distance={20}>\n\  <div className="ph-popover-text">\n\    为了占位存在的气泡提示语。\n\  </div>\n</Popover>',
	'popover-clickcallback':'<Button phSize="lg" ref={(button)=>{this.button4 = button}}>按钮</Button>\n<Popover getTarget={()=>{return this.button4}} clickCallback={(bool)=>{alert(bool)}}>\n\  <div className="ph-popover-text">\n\    为了占位存在的气泡提示语。\n\  </div>\n</Popover>',

	'tabset-index': '<Tabset index={1}>\n\  <Tab heading="标题1">\n\    横向内容1\n\  </Tab>\n\  <Tab heading="标题2">\n\    横向内容2\n\  </Tab>\n</Tabset>',
	'tabset-vertical': '<Tabset vertical>\n\  <Tab heading="标题1">\n\    竖向内容1\n\  </Tab>\n\  <Tab heading="标题2">\n\    竖向内容2\n\  </Tab>\n</Tabset>',
	'tabset-width': '<Tabset vertical width={30}>\n\  <Tab heading="标题1">\n\    竖向内容1\n\  </Tab>\n\  <Tab heading="标题2">\n\    竖向内容2\n\  </Tab>\n</Tabset>',
	'tabset-clickcallback': '<Tabset clickCallback={(index)=>{alert(index);}}>\n\  <Tab heading="标题1">\n\    横向内容1\n\  </Tab>\n\  <Tab heading="标题2">\n\    横向内容2\n\  </Tab>\n</Tabset>',
	'tab-heading': '<Tabset>\n\  <Tab heading="Tab heading 1">\n\    横向内容1\n\  </Tab>\n\  <Tab heading="Tab heading 2">\n\    横向内容2\n\  </Tab>\n</Tabset>',
	'tab-clickcallback': '<Tabset>\n\  <Tab heading="标题1" clickCallback={(index)=>{alert(index);}}>\n\    横向内容1\n\  </Tab>\n\  <Tab heading="标题2">\n\    横向内容2\n\  </Tab>\n</Tabset>',

	'search-buttontext':'<SearchBar buttonText="no" />',
	'search-placeholder':'<SearchBar placeholder="请输入..." />',
	'search-clickcallback':'<SearchBar clickCallback={(query)=>{alert(query)}} />',
	'search-querycallback':'<SearchBar queryCallback={(query)=>{alert(query)}} />',
	'search-focuscallback':'<SearchBar focusCallback={()=>{alert("focus")}} />',
	'search-blurcallback':'<SearchBar blurCallback={()=>{alert("blur")}} />',
	'search-showbutton': '<SearchBar placeholder="请输入..." showButton={this.state.showButton}\n\  focusCallback={()=>{this.setState({showButton:true})}}\n\  clickCallback={()=>{this.setState({showButton:false})}} />',

	'slider-progress': '<Slider progress={25} />',
	'slider-placement': '<Slider />\n<Slider placement="bottom" />',
	'slider-slidecallback': '<Slider progress={this.state.progress} slideCallback={(newProgress)=>{this.setState({progress:newProgress})}} />',
	'slider-disabled': '<Slider disabled progress={10} />',
	'slider-tipstay': '<Slider tipStay />',
	'slider-range':'<Slider range={[50,200]} showRange />',
	'slider-showrange':'<Slider range={[25,65]} showRange />',
	'slider-duration':'<Slider duration={20} />',

	'swipe-phstyle': '<Swipe buttons={[\n\  {text: "删除", onHandle: this.onDelete}\n]}>\n  <div style={{padding: "1rem"}}>滑动块2</div>\n</Swipe>',
	'swipe-buttons': '<Swipe buttons={[\n\  {text: "删除", onHandle: this.onDelete, phStyle: "error"},\n\  {text: "取消", onHandle: this.onCancle, phStyle: "info"}\n]}>\n  <div style={{padding: "1rem"}}>滑动块2</div>\n</Swipe>',

	'table-view-href': '<TableView>\n\  <a href="http://www.baidu.com">Item 1</a>\n</TableView>',
	'table-view-other-component': '<TableView>\n\  <a>Item 2 <Badge>2</Badge></a>\n\  <a href="###">Item 3 <Badge>5</Badge></a>\n\  <a>Item 4 <Switch /></a>\n</TableView>',

	'row-align': '<Row align="stretch">\n\  <Col>\n\    <div className="col-demo">stretch</div>\n\  </Col>\n\  <Col>\n\    <div className="col-demo">stretch<br />baseline</div>\n\  </Col>\n\  <Col>\n\    <div className="col-demo">stretch<br />stretch<br />stretch</div>\n\  </Col>\n</Row>',
	'col-align': '<Row>\n\  <Col align="top">\n\    <div className="col-demo">top</div>\n\  </Col>\n\  <Col align="center">\n\    <div className="col-demo">center</div>\n\  </Col>\n\  <Col align="bottom">\n\    <div className="col-demo">bottom</div>\n\  </Col>\n\  <Col>\n\    <div className="col-demo">top<br />center<br />bottom</div>\n\  </Col>\n</Row>',
	'col-width': '<Row>\n\  <Col width="15">\n\    <div className="col-demo">15</div>\n\  </Col>\n</Row>',
	'col-offset': '<Row>\n\  <Col width="20" offset="10">\n\    <div className="col-demo">10</div>\n\  </Col>\n</Row>',

	'list-normal':'<List>\n\  <List.Header>标题</List.Header>\n\  <List.Item className="clickable">\n\    <List.Col>\n\      <label>选择一</label>\n\    </List.Col>\n\  </List.Item>\n</List>',
	'list-input':'<List>\n\  <List.Item>\n\    <List.Col>\n\      <Input type="text" placeholder="请输入" />\n\    </List.Col>\n\  </List.Item>\n\  <List.Item>\n\    <List.Col heading>\n\      <label>姓名</label>\n\    </List.Col>\n\    <List.Col>\n\      <Input type="text" placeholder="请输入" />\n\    </List.Col>\n\    <List.Col heading>\n\      <label>密码</label>\n\    </List.Col>\n\    <List.Col>\n\      <Input type="text" placeholder="请输入" />\n\    </List.Col>\n\  </List.Item>\n</List>',
	'list-disabled':'<List>\n\  <List.Item disabled>\n\    <List.Col heading>\n\      <label>姓名</label>\n\    </List.Col>\n\    <List.Col>\n\      <Input type="text" placeholder="请输入" value="disabled" />\n\    </List.Col>\n\  </List.Item>\n</List>',
	'list-error':'<List>\n\  <List.Item error>\n\    <List.Col heading>\n\      <label>姓名</label>\n\    </List.Col>\n\    <List.Col>\n\      <Input type="text" placeholder="请输入" value="error" error clear/>\n\    </List.Col>\n\  </List.Item>\n</List>',
	'list-password':'<List>\n\  <List.Item>\n\    <List.Col heading>\n\      <label>密码</label>\n\    </List.Col>\n\    <List.Col>\n\      <Input type="password" placeholder="请输入" value="123456" clear visible />\n\    </List.Col>\n\  </List.Item>\n</List>',
	'list-phicon':'<List>\n\  <List.Item>\n\    <List.Col heading>\n\      <label><Icon phIcon="kaidiancankao" />反馈</label>\n\    </List.Col>\n\    <List.Col>\n\      <Input type="text" placeholder="请输入" value="123456" />\n\    </List.Col>\n\  </List.Item>\n</List>',
	'list-navigate':'<List>\n\  <List.Item navigate>\n\    <List.Col heading>\n\      <label>性别</label>\n\    </List.Col>\n\    <List.Col>\n\      <Input type="text" placeholder="男/女" disabled />\n\    </List.Col>\n\  </List.Item>\n</List>',
	'list-form':'<List>\n\  <List.Item>\n\    <List.Col heading>\n\      <label>Female</label>\n\    </List.Col>\n\    <List.Col tail>\n\      <Checkbox />\n\    </List.Col>\n\  </List.Item>\n\  <List.Item>\n\    <List.Col heading>\n\      <label>性别</label>\n\    </List.Col>\n\    <List.Col>\n\      <Radio label="男" name="sex" />\n\      <Radio label="女" name="sex" />\n\    </List.Col>\n\  </List.Item>\n\  <List.Item>\n\    <List.Col heading>\n\      <label>开关</label>\n\    </List.Col>\n\    <List.Col tail>\n\      <Switch />\n\    </List.Col>\n\  </List.Item>\n</List>',
	'list-badge':'<List>\n\  <List.Item navigate>\n\    <List.Col heading>\n\      <label>信息数量</label>\n\    </List.Col>\n\    <List.Col tail>\n\      <Badge>10</Badge>\n\    </List.Col>\n\  </List.Item>\n\  <List.Item>\n\    <List.Col heading>\n\      <label>新上线</label>\n\    </List.Col>\n\    <List.Col tail>\n\      <Badge>New</Badge>\n\    </List.Col>\n\  </List.Item>\n</List>',
	'list-heading-twoline':'<List>\n\  <List.Item navigate>\n\    <List.Col heading>\n\      <label>性别</label>\n\      <label className="ph-sub-heading">只能选择一次</label>\n\    </List.Col>\n\    <List.Col tail>\n\      <Input type="text" placeholder="男/女" disabled />\n\    </List.Col>\n\  </List.Item>\n</List>',
	'list-tail-twoline':'<List>\n\  <List.Item navigate>\n\    <List.Col heading>\n\      <label>性别</label>\n\    </List.Col>\n\    <List.Col tail>\n\      <Input type="text" placeholder="男/女" disabled />\n\      <label className="ph-sub-heading">只能选择一次</label>\n\    </List.Col>\n\  </List.Item>\n</List>',
	'list-image':'<List>\n\  <List.Item navigate>\n\    <List.Col heading>\n\      <label>性别</label>\n\    </List.Col>\n\    <List.Col tail>\n\      <Image src={IMAGE_URL} />\n\    </List.Col>\n\  </List.Item>\n</List>',
	
	'menu-visible': '<Menu visible={true}>\n\  <Menu.Header>...</Menu.Header>\n\  <Menu.Body>...</Menu.Body>\n</Menu>',
	'menu-ceiling': '// 设置为0表示至始至终吸顶\n<Menu ceiling={0}>\n\  <Menu.Header>...</Menu.Header>\n\  <Menu.Body>...</Menu.Body>\n</Menu>\n'+
		'// 设置为100表示从滚动100开始吸顶\n<Menu ceiling={100}>\n\  <Menu.Header>...</Menu.Header>\n\  <Menu.Body>...</Menu.Body>\n</Menu>',
	'menu-onmenuchange': '<Menu clickCallback={(visible)=>{console.log(visible);}}>\n\  <Menu.Header>...</Menu.Header>\n\  <Menu.Body>...</Menu.Body>\n</Menu>',

	'menu-header-align': '<Menu>\n\  <Menu.Header align="right">...</Menu.Header>\n\  <Menu.Body>...</Menu.Body>\n</Menu>',
	'menu-body-placement': '<Menu>\n\  <Menu.Header>...</Menu.Header>\n\  <Menu.Body placement="left">...</Menu.Body>\n</Menu>',
	'menu-body-width': '<Menu>\n\  <Menu.Header>...</Menu.Header>\n\  <Menu.Body width={50}>...</Menu.Body>\n</Menu>',
	'menu-body-closebutton': '<Menu>\n\  <Menu.Header>...</Menu.Header>\n\  <Menu.Body closeButton>...</Menu.Body>\n</Menu>\n or \n'+
		'<Menu>\n\  <Menu.Header>...</Menu.Header>\n\  <Menu.Body closeButton={false}>...</Menu.Body>\n</Menu>',
	'menu-nav-align': '<Menu>\n\  <Menu.Header>...</Menu.Header>\n\  <Menu.Body>\n\    <Menu.Nav align="center">...</Menu.Nav>\n\  </Menu.Body>\n</Menu>',
	'menu-list-onmenulistchange': '<Menu>\n\  <Menu.Header>...</Menu.Header>\n\  <Menu.Body>\n\    <Menu.Nav>\n\      <Menu.List activeName={this.state.activeName} clickCallback={(name)=>{this.setState({activeName:name})}} >...<Menu.List>\n\    </Menu.Nav>\n\  </Menu.Body>\n</Menu>',
	'menu-item-phicon': '...\n<Menu.List activeName={this.state.activeName} clickCallback={(name)=>{this.setState({activeName:name})}} >\n\  <Menu.Item phIcon="home">主页</Menu.Item>\n<Menu.List>\n...',
	'menu-item-name': '...\n<Menu.List activeName={this.state.activeName} clickCallback={(name)=>{this.setState({activeName:name})}} >\n\  <Menu.Item name="home">主页</Menu.Item>\n<Menu.List>\n...',
	'menu-item-href': '...\n<Menu.List activeName={this.state.activeName} clickCallback={(name)=>{this.setState({activeName:name})}} >\n\  <Menu.Item href="#home">主页</Menu.Item>\n<Menu.List>\n...',
	'menu-item-onmenuitemchange': '...\n<Menu.List activeName={this.state.activeName} clickCallback={(name)=>{this.setState({activeName:name})}} >\n\  <Menu.Item clickCallback={(name)=>{console.log(name);}}>主页</Menu.Item>\n<Menu.List>\n...',
	
	'loadinglist':'<LoadingList phMode="auto" loadingStatus={this.state.loadingStatus} \nloadTips={["点击加载更多","加载中...","加载成功！","加载失败！","没有更多"]} \nbuttonStyles={["primary","gray","success","danger","gray"]} \nloadCallback={::this.nloadCallback} loadEndCallback={::this.loadEndCallback}>\n\  '+
		'<ul>\n\    {\n\      this.state.loadingData.map((data,index)=>{\n\        return (\n\          <li key={index}>...</li>\n\        );\n\      })\n\    }\n\  </ul>\n</LoadingList>',

	'image-src':'<Image src={IMAGE_URL} alt="..."/>',
	'image-defaultsrc':'<Image defaultSrc={DEFULT_IMAGE} src={IMAGE_URL} />',
	'image-lazy':'<Image defaultSrc={DEFULT_IMAGE} src={LAZY_URL} lazy />',
	'image-phsize':'<Image src={IMAGE_URL} phSize="default" />\n<Image src={IMAGE_URL} phSize="cover" />\n<Image src={IMAGE_URL} phSize="contain" />',
	'image-loadcallback':'<Image src={IMAGE_URL} loadCallback={(err)=>{if(!err) console.log("success!")}} />',

	'imagelist-column':'<ImageList column={4}>\n{\n\  this.state.images.map((data,index)=>{\n\    return (\n\      <dl className="ph-image-item" key={index}>\n\        <dt>\n\          <Image src={data.image} alt={data.title}/>\n\        </dt>\n\        <dd>\n\          <p className="ph-image-title">{data.title}</p>\n\          <p className="ph-image-desp">{data.desp}</p>\n\        </dd>\n\      </dl>\n\    )\n\  })\n}\n</ImageList>',
	
	'steps-list':'<Steps list={["合作信息","公司信息","资质信息"]} />',
	'steps-index':'<Steps index={2} list={["合作信息","公司信息","资质信息","资质信息"]} />',
	'steps-clickcallback':'<Steps clickCallback={::this.clickCallback} list={["合作信息","公司信息","资质信息","资质信息"]}/>\nclickCallback(str, index){\n\  ...\n}',
	'steps-readonly':'<Steps readOnly list={["合作信息","公司信息","资质信息","公司信息","资质信息","公司信息"]} />',

	'animate': '<Animate transitionName="fade">\n\  {this.renderList()}\n</Animate>\n'+
		'this.state = {list: ["看一本书","睡8个小时"]}\nrenderList(){// 渲染todo list \n\  const items = this.state.list.map((item,index)=>{\n\    return <div key={index} className="animated" onClick={()=>{...}}>{item}</div>;\n\  });\n\  return items;\n}',
	'drag': '<Drag dragCallback={::this.dragCallback} dropCallback={::this.dropCallback} style={{height:0}}>\n\  <div className="box" ref={(box)=>{this.box = box}}>Drag</div>\n</Drag>\n'+
		'dragCallback(event,position){\n\  // ...\n}\dropCallback(event,position){\n\  // ...\n}\n',

	'filter-container': '<PhFilter.Container index={-1} hidecat={false} clickCallback={this.clickCallback.bind(this)}>\n...\n</PhFilter.Container>',
	'filter-panelsimple': 'const buttons = [{onHandle: this.confirmFilter.bind(this)}]\n\n<PhFilter.Container>\n\  <PhFilter.PanelSimple default="筛选" selected={{key:"rry",value:"人人有"}} buttons={buttons}>\n\    ...\n\  </PhFilter.PanelSimple>\n</PhFilter.Container>',
	'filter-panel': 'const buttons = [{onHandle: this.confirmFilter.bind(this)}]\n\n<PhFilter.Container>\n\  <PhFilter.Panel default="筛选" selected={{key:"rry",value:"人人有"}} buttons={buttons} index={1}>\n\    ...\n\  </PhFilter.Panel>\n</PhFilter.Container>',
	'filter-itemgroup':'...\n<PhFilter.Panel default="筛选">\n\  <PhFilter.ItemGroup label={i}>\n\    <PhFilter.Item itemKey="sk">烧烤</PhFilter.Item>\n\    <PhFilter.Item itemKey="hx">海鲜</PhFilter.Item>\n\  </PhFilter.ItemGroup>\n</PhFilter.Panel>\n...',
	'filter-item':'...\n<PhFilter.PanelSimple default="筛选">\n\  <PhFilter.Item itemKey="sk">烧烤</PhFilter.Item>\n\  <PhFilter.Item itemKey="hx">海鲜</PhFilter.Item>\n</PhFilter.PanelSimple>\n...',

	'filter-checkbox-container':'const buttons = [{onHandle: this.onSubmit.bind(this)}]\n\n<PhFilter.CheckboxContainer choose={this.state.choose} index={2} buttons={buttons}>\n...\n</PhFilter.CheckboxContainer>',
	'filter-checkbox-item':'const buttons = [{onHandle: this.onSubmit.bind(this)}]\n<PhFilter.CheckboxContainer buttons={buttons}>\n\  <PhFilter.ItemGroup mainKey="gw" label="购物">\n\    <PhFilter.Item disabled={false} itemKey="tz">\n\      童装\n\    </PhFilter.Item>\n\  </PhFilter.ItemGroup>\n</PhFilter.CheckboxContainer>'
};

export default code;