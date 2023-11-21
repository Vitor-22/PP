import { DivTipoCard, IconExame, SubtituloData, DivDataCard, DivIconExame, DivExamesCard} from "./styled";

function Publicacao(props){
    return(
    <DivExamesCard>
                    <DivIconExame>
                        <IconExame/>
                    </DivIconExame>
                    <DivDataCard>
                        <SubtituloData>{props.dataexame}</SubtituloData>
                    </DivDataCard>
                    <DivTipoCard>
                        <SubtituloData>{props.tipoexame}</SubtituloData>
                    </DivTipoCard>
    </DivExamesCard>
    )
}

export default Publicacao;