const Skill = ({ Skills }) => {
    return (
        <div className="Skill">
            {Skills.map((x, key) => (
                <div className="alert alert-info" key={key}>
                    Tool: {x.Tools}
                    <br />
                    Progress: {x.Progress}%
                </div>
            ))}
        </div>
    )
}

export default Skill;