import Accordion from '@mui/material/Accordion';
import AccordionSummary from '@mui/material/AccordionSummary';
import AccordionDetails from '@mui/material/AccordionDetails';
import Typography from '@mui/material/Typography';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import AddIcon from '@mui/icons-material/Add';

export default function Right_Accordion() {
  return (
    <div style={{ display: "flex", flexDirection: "column", gap: 14 }}>
      <Accordion
        id={"accordion"}
        sx={{
          backgroundColor: "transparent",
          color: "#fff",
          width: "620px",
          boxShadow: "none",
          borderBottom: "1px solid #d9dadb",
          borderTop: "none",
          pt: 1,
          pb: 2,
          '&::after': {
            display: 'none',
            backgroundColor: 'transparent',
          },
          '&::before': {
            display: 'none'
          }
        }}
      >
        <AccordionSummary
          expandIcon={<AddIcon sx={{ color: "#fff" }} />}
          aria-controls="panel1-content"
          id="panel1-header"
        >
          <Typography component="span" sx={{ fontWeight: 600, fontSize: "1.125rem" }}>Можно ли приносить свою еду?</Typography>
        </AccordionSummary>
        <AccordionDetails sx={{ mt: -2.5, fontSize: "0.875rem", lineHeight: "1.25rem", color: "#d9dadb" }}>
          Так как мы не можем нести ответственность за качество принесённых продуктов, а также за возможные повреждения имущества кинотеатра, включая сиденья и ковровое покрытие, вход в зал с едой, приобретённой за пределами кинотеатра, запрещён. Все продукты, продаваемые в нашем кинобаре, сертифицированы и полностью безопасны.
        </AccordionDetails>
      </Accordion>
      <Accordion
        id={"accordion"}
        sx={{
          backgroundColor: "transparent",
          color: "#fff",
          width: "620px",
          boxShadow: "none",
          borderBottom: "1px solid #d9dadb",
          borderTop: "none",
          pt: 1,
          pb: 2,
          '&::after': {
            display: 'none',
            backgroundColor: 'transparent',
          },
          '&::before': {
            display: 'none'
          }
        }}
      >
        <AccordionSummary
          expandIcon={<AddIcon sx={{ color: "#fff" }} />}
          aria-controls="panel1-content"
          id="panel1-header"
        >
          <Typography component="span" sx={{ fontWeight: 600, fontSize: "1.125rem" }}>У вас есть скидки?</Typography>
        </AccordionSummary>
        <AccordionDetails sx={{ mt: -2.5, fontSize: "0.875rem", lineHeight: "1.25rem", color: "#d9dadb" }}>
          Да, есть. Подробную информацию вы можете найти в разделе «Акции» на нашем сайте.
        </AccordionDetails>
      </Accordion>
    </div>
  );
}