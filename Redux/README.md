# My Redux Projects with React

## Explanation

* All projects start with a number that represent a learning curve of technologies in this field.

* 00 projects is templates projects to work in react with redux.

* "t" in the projects numbers folders name is relative to typescript. Will be a relative project of the one without "t" but using typescript.

## Shortcuts:

### Creating the project

1 - creating a react app: npx create-react-app my-app 

2 - Creating a redux react app: npx create-react-app my-app --template redux

3 - Creating a redux react app using typescript: npx create-react-app --template redux-typescript

If you use npm:
npm install react-redux

Or if you use Yarn:
yarn add react-redux

npm install @types/react-redux

### Creating components - need to install vscode snippets extension.

Trigger	Content
rcc→	class component skeleton
rrc→	class component skeleton with react-redux connect
rrdc→	class component skeleton with react-redux connect and dispatch
rccp→	class component skeleton with prop types after the class
rcjc→	class component skeleton without import and default export lines
rcfc→	class component skeleton that contains all the lifecycle methods
rwwd→	class component without import statements
rpc→	class pure component skeleton with prop types after the class
rsc→	stateless component skeleton
rscp→	stateless component with prop types skeleton
rscm→	memoize stateless component skeleton
rscpm→	memoize stateless component with prop types skeleton
rsf→	stateless named function skeleton
rsfp→	stateless named function with prop types skeleton
rsi→	stateless component with prop types and implicit return
fcc→	class component with flow types skeleton
fsf→	stateless named function skeleton with flow types skeleton
fsc→	stateless component with flow types skeleton
rpt→	empty propTypes declaration
rdp→	empty defaultProps declaration
con→	class default constructor with props
conc→	class default constructor with props and context
est→	empty state object
cwm→	componentWillMount method
cdm→	componentDidMount method
cwr→	componentWillReceiveProps method
scu→	shouldComponentUpdate method
cwup→	componentWillUpdate method
cdup→	componentDidUpdate method
cwun→	componentWillUnmount method
gsbu→	getSnapshotBeforeUpdate method
gdsfp→	static getDerivedStateFromProps method
cdc→	componentDidCatch method
ren→	render method
sst→	this.setState with object as parameter
ssf→	this.setState with function as parameter
props→	this.props
state→	this.state
bnd→	binds the this of method inside the constructor
disp→	MapDispatchToProps redux function

### Creating PropTypes

Trigger	Content
pta→	PropTypes.array,
ptar→	PropTypes.array.isRequired,
ptb→	PropTypes.bool,
ptbr→	PropTypes.bool.isRequired,
ptf→	PropTypes.func,
ptfr→	PropTypes.func.isRequired,
ptn→	PropTypes.number,
ptnr→	PropTypes.number.isRequired,
pto→	PropTypes.object,
ptor→	PropTypes.object.isRequired,
pts→	PropTypes.string,
ptsr→	PropTypes.string.isRequired,
ptsm→	PropTypes.symbol,
ptsmr→	PropTypes.symbol.isRequired,
ptan→	PropTypes.any,
ptanr→	PropTypes.any.isRequired,
ptnd→	PropTypes.node,
ptndr→	PropTypes.node.isRequired,
ptel→	PropTypes.element,
ptelr→	PropTypes.element.isRequired,
pti→	PropTypes.instanceOf(ClassName),
ptir→	PropTypes.instanceOf(ClassName).isRequired,
pte→	PropTypes.oneOf(['News', 'Photos']),
pter→	PropTypes.oneOf(['News', 'Photos']).isRequired,
ptet→	PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
ptetr→	PropTypes.oneOfType([PropTypes.string, PropTypes.number]).isRequired,
ptao→	PropTypes.arrayOf(PropTypes.number),
ptaor→	PropTypes.arrayOf(PropTypes.number).isRequired,
ptoo→	PropTypes.objectOf(PropTypes.number),
ptoor→	PropTypes.objectOf(PropTypes.number).isRequired,
ptoos→	PropTypes.objectOf(PropTypes.shape()),
ptoosr→	PropTypes.objectOf(PropTypes.shape()).isRequired,
ptsh→	PropTypes.shape({color: PropTypes.string, fontSize: PropTypes.number}),
ptshr→	PropTypes.shape({color: PropTypes.string, fontSize: PropTypes.number}).isRequired,
