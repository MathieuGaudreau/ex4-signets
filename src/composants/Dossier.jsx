import './Dossier.scss'; 
import { IconButton } from '@material-ui/core';
import SortIcon from '@material-ui/icons/Sort';
import MoreVertIcon from '@material-ui/icons/MoreVert';
import Menu from '@material-ui/core/Menu';
import MenuItem from '@material-ui/core/MenuItem';
import React from 'react';

export default function Dossier({id, nom, couleur, datemodif, couverture}) {
  const [PosMenu, setPosMenu] = React.useState(null);
  const menuOuvrir = (event) => {
    setPosMenu(event.currentTarget);
  };

  const menuFermer = () => {
    setPosMenu(null);
  };
  return (
    <article className="Dossier" style={{backgroundColor: couleur}}>
      <div className="couverture">
        <IconButton className="deplacer" aria-label="déplacer" disableRipple={true}>
          <SortIcon />
        </IconButton>
        <img src={couverture} alt={nom}/>
      </div>
      <div className="info">
        <h2>{nom}</h2>
        <p>Modifié : {formaterDate(datemodif)}</p>
      </div>
      <IconButton className="modifier" aria-label="modifier" size="small">
        <MoreVertIcon onClick={menuOuvrir} />
        <Menu
        id="simple-menu"
        anchorEl={PosMenu}
        keepMounted
        open={Boolean(PosMenu)}
        onClose={menuFermer}
      >
        <MenuItem onClick={menuFermer}>Modifier</MenuItem>
        <MenuItem onClick={menuFermer}>Supprimer</MenuItem>
      </Menu>
      </IconButton>
    </article>
  );
}

/**
 * Formate les objets date de Firestore et retourne une chaîne de caractères
 * @param {Object} d Objet date retourné par Firestore
 * @returns String date formatée en français
 */
function formaterDate(d) {
  const dateJs = d ? new Date(d.seconds*1000) : new Date();
  const mois = ['janvier', 'février', 'mars', 'avril', 'mai', 'juin', 'juillet', 'août', 'septembre', 'octobre', 'novembre', 'décembre'];
  return `${dateJs.getDate()} ${mois[dateJs.getMonth()]} ${dateJs.getFullYear()}`;
}