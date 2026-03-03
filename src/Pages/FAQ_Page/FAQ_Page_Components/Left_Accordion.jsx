import Accordion from '@mui/material/Accordion';
import AccordionSummary from '@mui/material/AccordionSummary';
import AccordionDetails from '@mui/material/AccordionDetails';
import Typography from '@mui/material/Typography';
import AddIcon from '@mui/icons-material/Add';

export default function Left_Accordion() {
  return (
    <div>
      <Accordion
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
          <Typography component="span" sx={{ fontWeight: 600, fontSize: "1.125rem" }}>Сколько стоит билет?</Typography>
        </AccordionSummary>
        <AccordionDetails sx={{ mt: -2.5, fontSize: "0.875rem", lineHeight: "1.25rem", color: "#d9dadb" }}>
          Цена билета может зависеть от дня недели, времени и формата. Поэтому вы можете ознакомиться с актуальными ценами, перейдя на нужный фильм в расписании на главной странице.
        </AccordionDetails>
      </Accordion>
      <Accordion
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
          <Typography component="span" sx={{ fontWeight: 600, fontSize: "1.125rem" }}>Что такое «Love seats»?</Typography>
        </AccordionSummary>
        <AccordionDetails sx={{ mt: -2.5, fontSize: "0.875rem", lineHeight: "1.25rem", color: "#d9dadb" }}>
          Это двойные сиденья, предназначенные для влюблённых. Покупая «Love seats», вы получаете два места по одной цене.
        </AccordionDetails>
      </Accordion>
      <Accordion
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
          <Typography component="span" sx={{ fontWeight: 600, fontSize: "1.125rem" }}>Если мой возраст не соответствует возрастному рейтингу фильма, могу ли я его посмотреть?</Typography>
        </AccordionSummary>
        <AccordionDetails sx={{ mt: -2.5, fontSize: "0.875rem", lineHeight: "1.25rem", color: "#d9dadb" }}>
          Согласно статье 40.2.2-2 Закона о кинематографии Азербайджанской Республики, распространение информационных продуктов без возрастной классификации и соответствующей маркировки по возрастной категории запрещено.

          На основании этих законодательных актов кинотеатры обязаны соблюдать возрастные ограничения для фильмов и не допускать лиц, не соответствующих возрастной категории, к просмотру соответствующих фильмов. Это возможно только в сопровождении родителей.
        </AccordionDetails>
      </Accordion>
    </div>
  );
}