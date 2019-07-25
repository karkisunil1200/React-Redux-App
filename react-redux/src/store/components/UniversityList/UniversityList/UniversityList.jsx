import React from 'react';
import {connect} from 'react-redux';

function UniversityList(props) {
  return (
    <div>
      <h1>Welcome to List of Universities</h1>
        
    </div>
  );
}
const mapStateToProps = state => {
  return {
    university = state.university
  };
};

export default connect(mapStateToProps,{})(UniversityList);