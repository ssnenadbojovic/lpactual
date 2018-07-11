import * as React from 'react';
import { Loader, Image } from 'semantic-ui-react';

interface Iprops {

visible: boolean;

}
export default class Wait extends React.Component<Iprops, any> {
    constructor(props: Iprops) {
      super(props)
      this.state = { visible: '',   } // Value is empty by default
    
    }
render() {
return (
<div style={{zIndex: 300,display: 'none', position: 'fixed', height: '100%', width: '100%', top: '0', left: '0', background: 'rgba(0,0,0,0.8)' }}>
<Loader size="massive" active={true} />

<Image src="/images/wireframe/short-paragraph.png" />
</div>
);
} }