import React,{Component}  from 'react';
import { graphql } from 'react-apollo';
import { gql } from 'apollo-boost';


const getParameterQuery = gql`
    {
        getNEMOData {
            NEMO_Mock_Data {
              copValue
              eUROEmissionClassType
            }
        }
    }
`;

class ParameterList extends Component {
    displayParameters(){
      var data = this.props.data;
      if(data.loading){
          return(<div>Loading Parameters...</div>);
      }else{
         return data.getNEMOData.NEMO_Mock_Data.map(parameter => {
            return(

                <ul>
                    <div>{ parameter.copValue} </div>
                    <div>{ parameter.eUROEmissionClassType}</div>
                </ul>

            );
        })
      }
    }   
    render(){
        
        return (
            <div>
                <ul id="Parameter-List">
                     {this.displayParameters()}
                </ul>
            </div>
        );
    }
}

export default graphql(getParameterQuery)(ParameterList);