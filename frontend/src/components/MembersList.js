import React, { Component } from "react";
import { Table } from "reactstrap";
import NewMemberModal from "./NewMemberModal";


class MembersList extends Component {
  render() {
    const members = this.props.members;
    return (
      <Table striped align="center">
        <thead>
          <tr>
            <th>Name</th>
            <th>Telephone</th>
            <th>Address</th>
            <th></th>
          </tr>
        </thead>
        <tbody>
          {!members || members.length <= 0 ? (
            <tr>
              <td colSpan="6" align="center">
                <b>No one here yet</b>
              </td>
            </tr>
          ) : (
            members.map(member => (
              <tr key={member.pk}>
                <td>{member.name}</td>
                <td>{member.telephone}</td>
                <td>{member.address}</td>
                <td align="center"></td>

                <NewMemberModal
                    create={false}
                    member={member}
                    resetState={this.props.resetState}
                />
                <NewMemberModal
                    create={false}
                    see={true}
                    member={member}
                    resetState={this.props.resetState}
                />
                
              </tr>
            ))
          )}
        </tbody>
      </Table>
    );
  }
}

export default MembersList;