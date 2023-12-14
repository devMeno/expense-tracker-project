import React, { Component, useContext, useState } from 'react';
import PropTypes from 'prop-types';

class Tab extends Component {

     static propTypes = {
          activeTab: PropTypes.string.isRequired,
          label: PropTypes.string.isRequired,
          onClick: PropTypes.func.isRequired,
     };

     onClick = () => {
          const { label, onClick } = this.props;
          onClick(label);
     }


     render() {
          const {
               onClick,
               props: {
                    activeTab,
                    label,
               },
          } = this;

          let className = 'tab-list-item';

          if (activeTab === label) {
               className += ' tab-list-active';
          }

          const handleSetType = () => {
               const [type, setType] = useState('');
               setType(label);
               console.log(type);
          }

          return (
               <div className='w-1/3 text-gray-500'>
                    <button
                         className={className}
                         onClick={(e) => {
                              e.preventDefault();
                              onClick();
                              handleSetType();
                         }}
                    >
                         {label}
                    </button>
               </div>
          );
     }
}

export default Tab;