import "./OverviewTab.css";

const OverviewTab = ({ jobApplication }) => {
    return (
        <table className="overview-tab">
            <tbody>
                <tr>
                    <td>First Name</td>
                    <td>{jobApplication.firstName}</td>
                </tr>
                <tr>
                    <td>Last Name</td>
                    <td>{jobApplication.lastName}</td>
                </tr>
                <tr>
                    <td>Phone Number</td>
                    <td>{jobApplication.phoneNum}</td>
                </tr>
                <tr>
                    <td>Linkedin Profile </td>
                    <td>{jobApplication.linkedin}</td>
                </tr>
            </tbody>
        </table>
    );
};

export default OverviewTab;
