import React from 'react';

const ApplicationItem = props => {
	return (
		<li className="list-group-item">
			<label className="list-group-item-text left">
				{props.listItem.title}
			</label>
			<button
				className="btn btn-danger float-right"
				onClick={() => {
					props.deleteItem(props.index);
				}}
			>
				Remove
			</button>
		</li>
	);
};

export default ApplicationItem;
