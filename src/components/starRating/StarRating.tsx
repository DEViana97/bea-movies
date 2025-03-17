import { useState } from "react";
import { Star, SquarePen, Save } from "lucide-react";
import styled from "styled-components";

const StarContainer = styled.div`
  display: flex;
  flex-direction: column; // Organiza os itens de forma vertical
  gap: 8px;
  margin-top: 10px; // Dá um espaçamento entre as estrelas e o botão
  align-items: end; // Centraliza os itens horizontalmente

`;

const StarIconsContainer = styled.div`
  display: flex;
  gap: 8px;
  align-items: center;
  bottom: 0;
  left: 0;
  position: absolute;
  margin-bottom: 1rem;
  margin-left: 1rem;
`;

const StarIcon = styled(Star)<{ $filled: boolean; $isEditable: boolean }>`
  cursor: ${({ $isEditable }) => ($isEditable ? "pointer" : "default")}; // Apenas permite clicar se for editável
  transition: fill 0.2s, stroke 0.2s;
  fill: ${({ $filled }) => ($filled ? "#facc15" : "rgba(243, 113, 153, 0.6)")}; // Preenche a estrela
  stroke: ${({ $filled }) => ($filled ? "#facc15" : "#d1d5db")}; // Cor da borda

  &:hover {
    ${({ $isEditable }) => $isEditable && `
      fill: #facc15;
      stroke: #facc15;
    `} // Permite hover somente se for editável
  }
`;

const Button = styled.button`
display: flex;
justify-content: center;
align-items: center;
gap: 4px;
width: fit-content;
align-items: center;
  padding: 6px 12px;
  background: #F37199;
  color: white;
  border: none;
  border-radius: 4px;
  cursor: pointer;
  font-size: 12px;
  transition: .3s;
  box-shadow: 1px 1px 5px 1px ${props => props.theme.barbieTheme.defaultTransparent};
  border-radius: 25px;
  margin-bottom: 1rem;
  position: absolute;
  top: 0;
  right: 0;



  &:hover {
    background-color: rgba(243, 113, 153, 0.6);
  }

  &:disabled {
    background-color: #a1a1a1;
    cursor: not-allowed;
  }
`;

const StarRating: React.FC<{ initialRating: number | null }> = ({ initialRating }) => {
  const [rating, setRating] = useState<number | null>(initialRating);
  const [tempRating, setTempRating] = useState<number | null>(initialRating);
  const [hoverRating, setHoverRating] = useState<number | null>(null);
  const [isEditing, setIsEditing] = useState(false);

  const handleSetTempRating = (newRating: number) => {
    setTempRating(newRating);
  };

  const handleSaveRating = () => {
    setRating(tempRating);
    setIsEditing(false);
  };

  return (
    <StarContainer>
      {!isEditing ? (
        rating === null ? (
          <Button onClick={() => setIsEditing(true)}>Avaliar <Star size={12}/> </Button> // Exibe o botão "Editar" caso o rating seja null
        ) : (
          <>
            <StarIconsContainer>
              {Array.from({ length: 5 }, (_, i) => (
                <StarIcon
                  key={i}
                  size={18}
                  $filled={i < (rating ?? 0)} // Preenche as estrelas com base no rating atual
                  $isEditable={false} // Não permite edição se o rating já estiver preenchido
                />
              ))}
            </StarIconsContainer>
          </>
        )
      ) : (
        <>
          <StarIconsContainer>
            {Array.from({ length: 5 }, (_, i) => (
              <StarIcon
                key={i}
                size={18}
                $filled={i < (hoverRating ?? tempRating ?? 0)} // Mostra as estrelas com base no hover ou no tempRating
                $isEditable={true} // Permite edição se estiver no modo de edição
                onMouseEnter={() => setHoverRating(i + 1)}
                onMouseLeave={() => setHoverRating(null)}
                onClick={() => handleSetTempRating(i + 1)}
              />
            ))}
          </StarIconsContainer>
          {tempRating !== rating && (
            <Button onClick={handleSaveRating}>Salvar <Save size={12} /></Button> // Exibe o botão "Salvar" quando a avaliação for alterada
          )}
        </>
      )}
    </StarContainer>
  );
};

export default StarRating;
