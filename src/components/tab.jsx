import React, { Component, useContext } from 'react';
import PropTypes from 'prop-types';
import { TypeContext } from './typeContext';

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

          return (
               <div className='w-1/3 text-gray-500'>
                    <button
                         className={className}
                         onClick={onClick}
                    >
                         {label}
                    </button>
               </div>
          );
     }
}

export default Tab;