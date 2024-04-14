import React,{Component}  from 'react';
import { graphql } from 'react-apollo';
import { gql } from 'apollo-boost';


const getcopValueQuery = gql`
    {
        health {
            sensor
        }
    }
`;
   

// {
    //    getNEMOData {
    //        NEMO_Mock_Data {
    //            vehicleid
    //            soundEmissionDriveBy
    //        }
    //    }
    //}


class AddcopValueParameter extends Component {
    displaysoundEmissionDriveBy(){
        var data = this.props.data;
        if(data.loading){
            return( <option disabled>Loading soundEmissionDriveByValue</option> );
        } else {
            return data.health.map(sEDV=> {
                return( <option key={ sEDV.id } value={sEDV.id}>{ sEDV.sensor }</option> );
            });
        }
    }  
    render(){
        
        return (
            <form id="add-copValue">
                <div className="field">
                    <label>Sound Emission Drive By Value:</label>
                    <select>
                        <option>See soundEmissionDriveByValues</option>
                        { this.displaysoundEmissionDriveBy() }
                    </select>
                </div>

            </form>
            
        );
    }
}


export default graphql(getcopValueQuery)(AddcopValueParameter);