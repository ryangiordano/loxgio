import React from "react";
import { CharacterContext } from "../../../Home";
import MainAreaBase from "../../MainAreaBase";

const Details = ({ setInfoText, match }) => {
    console.log(match)
    const characterId = match.params.characterId;
    return (<MainAreaBase>
        <CharacterContext.Consumer>{({ characters }) => {
            const c = characters.find(c => c.id === Number(characterId))
            if (!c) {
                return null;
            }
            return (<div>
                {c.name}
            </div>)
        }}</CharacterContext.Consumer>
    </MainAreaBase>)
}

export default Details;