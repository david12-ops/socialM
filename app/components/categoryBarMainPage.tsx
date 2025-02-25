import { Button, styled } from "@mui/material";
import styles from "../styles/component.module.css";


export default function CategoryBar() {
    const CostumeCreateButton = styled(Button, {
        shouldForwardProp: (prop) => prop !== 'customProp',
    })(({ theme }) => ({
        color: "black",
        backgroundColor: "rgba(128, 128, 128, 0.3)",
        borderRadius: "20px",
        fontFamily: 'Roboto, sans-serif',
        fontSize: '14px',
        padding: "10px",
        ":hover": {
            backgroundColor: "rgba(128, 128, 128, 0.1)",
        }
    }));

    return (
        <div className={styles.sectionCategoryBar}>
            <ul>
                <li>{<CostumeCreateButton>Vše</CostumeCreateButton>}</li>
                <li>{<CostumeCreateButton>Hry</CostumeCreateButton>}</li>
                <li>{<CostumeCreateButton>Hudba</CostumeCreateButton>}</li>
                <li>{<CostumeCreateButton>Podcasty</CostumeCreateButton>}</li>
                <li>{<CostumeCreateButton>Mixy</CostumeCreateButton>}</li>
                <li>{<CostumeCreateButton>Živě</CostumeCreateButton>}</li>
                <li>{<CostumeCreateButton>Akční adventury</CostumeCreateButton>}</li>
                <li>{<CostumeCreateButton>Fotbal</CostumeCreateButton>}</li>
                <li>{<CostumeCreateButton>Fitness</CostumeCreateButton>}</li>
                <li>{<CostumeCreateButton>Nově nahráno</CostumeCreateButton>}</li>
                <li>{<CostumeCreateButton>Přehráno</CostumeCreateButton>}</li>
                <li>{<CostumeCreateButton>Pro vás nové</CostumeCreateButton>}</li>
            </ul>
        </div>
    )
}