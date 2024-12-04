import Rating from '@mui/material/Rating';

export interface AlisterMMProps {
    ratingValue: number;
    onRatingChange?: (newRating: number) => void;
}

function AlisterMM({ ratingValue, onRatingChange }: AlisterMMProps) {
    return (
        <Rating
            data-testid="rating-component"
            value={ratingValue}
            onChange={(_event, newValue) => {
                if (newValue !== null && onRatingChange) {
                    onRatingChange(newValue);
                }
            }}
        />
    );
}

export default AlisterMM;
