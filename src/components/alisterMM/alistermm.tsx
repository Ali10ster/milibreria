//Alister Alberto Martin Miranda
import Rating from '@mui/material/Rating';

export interface AlisterMM {
    ratingValue: number; // Valor de la calificación
    onRatingChange?: (newRating: number) => void; // Función de cambio de calificación
}

// Definición del componente
function AlisterMMRatting(props: AlisterMM) {
    const { ratingValue, onRatingChange } = props;
    
    return (
        <Rating
            value={ratingValue}
            onChange={(event, newValue) => {
                if (newValue !== null && onRatingChange) {
                    onRatingChange(newValue);
                }
            }}
        />
    );
}

export default AlisterMMRatting;
