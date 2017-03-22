import React from 'react';
import {connect} from 'react-redux';
import * as actions from '../actions/action';


export class IssueList extends React.Component {
    constructor(props) {
        super(props)
    };
    componentDidMount() {
        this.props.dispatch(actions.fetchIssueList());
    }

    render() {
        let hidden;
        const issues = this.props.issues.map((issue, i) => {
            return <div className="issue-box" key={i}>
                        <input name="selected-issue" type="radio" value={issue.id} onClick={() =>         this.props.dispatch(actions.selectedIssue(issue))}/>
                        Issue Title: {issue.title}
                        <p>Repo: {issue.repository.full_name}</p>
                        <a href={issue.html_url} target="_blank">Issue on Github</a>
                        { hidden = this.props.selected.title === issue.title ? '' : 'hidden'}
                        <button className={`button ${hidden}`}type="button" onClick={this.props.onClick}>Start The Clock</button>

                    </div>
        })
        return (
            <div>
                <h3>These issues aren't going to resolve themselves</h3>
                <p>Choose one and get to work!</p>
                {issues}
            </div>
        )
    }

}

const mapStateToProps = (state, props) => ({
    issues: state.List.issues,
    selected: state.List.userSelected
});

export default connect(mapStateToProps)(IssueList);
