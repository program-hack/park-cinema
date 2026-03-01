import React from 'react';
import { Box, Typography } from '@mui/material';
import { productsList } from '../Home/Home_Components/Content/data';
import { useParams } from 'react-router-dom';
import Schedule from '../Home/Home_Components/Content/Schedule/Schedule';

const Products_Page = ({ setSelect3, setSelect4, select3, select4}) => {
  const { movieId } = useParams();
  const product = productsList.find(movie => movie.path === movieId);
  return (
    <Box sx={{ backgroundColor: "#373737" }}>
      <Box sx={{ pt: 14, maxWidth: "1380px", mx: "auto", pb: 9 }}>
        <Box sx={{ display: "flex", flexDirection: "row", justifyContent: "space-between", alignItems: "start" }}>
          <Box>
            <Box sx={{ display: "flex", alignItems: "start", gap: 4 }}>
              <Box sx={{ maxWidth: "330px", maxHeight: "500px", width: "100%", height: "100%", display: "flex", justifyContent: "center", alignItems: "center", objectFit: "cover", overflow: "hidden", borderRadius: 6 }}>
                <img style={{ width: "100%", height: "auto" }} src={product.image} alt="Product Image" />
              </Box>

              <Box sx={{ display: "flex", flexDirection: "column", gap: 1.2, pt: 1 }}>
                <Typography sx={{ fontSize: "22px", fontWeight: 600, color: "#fff" }}>{product.title}</Typography>
                <Typography sx={{ fontSize: "14px", color: "rgba(217, 218, 219, 1)" }}>{product.theme}</Typography>
                <Box sx={{ display: "flex", flexDirection: "column" }}>
                  <Typography sx={{ fontSize: "19", fontWeight: 600, color: "#fff" }}>Язык</Typography>
                  <Box sx={{ display: "flex", alignItems: "center", gap: 2, mt: 1 }}>
                    {product.flags.map((icon, index) => (
                      <img key={index} style={{ width: "25px", height: "25px", overflow: "hidden", borderRadius: 50, objectFit: "cover", display: "flex", justifyContent: "center", alignItems: "center" }} src={icon} alt='Icon' />
                    ))}
                  </Box>
                </Box>
                <Box sx={{ display: "flex", flexDirection: "column", mb: 1 }}>
                  <Typography sx={{ fontSize: "19", fontWeight: 600, color: "#fff", mb: 1 }}>Субтитры</Typography>
                  <img style={{ width: "25px", height: "25px", overflow: "hidden", borderRadius: 50, objectFit: "cover", display: "flex", justifyContent: "center", alignItems: "center" }} src={product.subtitleLanguage} alt='Icon' />
                </Box>
                <Typography sx={{ color: "rgba(217, 218, 219, 1)", fontSize: "15px" }}><b style={{ color: "#fff" }}>Длительность:</b> {product.time}</Typography>
                <Typography sx={{ color: "rgba(217, 218, 219, 1)", fontSize: "15px" }}><b style={{ color: "#fff" }}>Год:</b> {product.year}</Typography>
                <Typography sx={{ color: "rgba(217, 218, 219, 1)", fontSize: "15px" }}><b style={{ color: "#fff" }}>Страна:</b> {product.country}</Typography>
                <Typography sx={{ color: "rgba(217, 218, 219, 1)", fontSize: "15px" }}><b style={{ color: "#fff" }}>Режиссер:</b> {product.director}</Typography>
                <Typography sx={{ color: "rgba(217, 218, 219, 1)", fontSize: "15px" }}><b style={{ color: "#fff" }}>Актеры:</b> {product.actors}</Typography>
                <Typography sx={{ color: "rgba(217, 218, 219, 1)", fontSize: "15px" }}><b style={{ color: "#fff" }}>Возрастное ограничение:</b> {product.age}</Typography>
                <Typography sx={{ color: "rgba(217, 218, 219, 1)", fontSize: "15px" }}><b style={{ color: "#fff" }}>Дата выхода:</b> {product.release_date}</Typography>
              </Box>
            </Box>
            <Typography sx={{ color: "#fff", fontSize: "16px", fontWeight: 500, maxWidth: "700px", mt: 5.6 }}>{product.description}</Typography>
          </Box>

          <Box sx={{ borderRadius: 6, overflow: "hidden", maxWidth: "660px", maxHeight: "380px", width: "100%", height: "100%", display: "flex", justifyContent: "center", alignItems: "center" }}>
            <iframe width="660" height="380" src={product.movie_video} title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>
          </Box>
        </Box>
        <Schedule setSelect3={setSelect3} setSelect4={setSelect4} select3={select3} select4={select4} />
      </Box>
    </Box>
  )
}

export default Products_Page
