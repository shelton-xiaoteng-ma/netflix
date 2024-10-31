import serverAuth from "@/lib/serverAuth";
import { NextApiRequest, NextApiResponse } from "next";

import prismadb from "@/lib/prismadb";

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  try {
    if (req.method === "GET") {
      const { currentUser } = await serverAuth(req, res);
      const favoriteMovies = await prismadb.movie.findMany({
        where: {
          id: {
            in: currentUser?.favoriteIds,
          },
        },
      });
      return res.status(200).json(favoriteMovies);
    }
    return res.status(405).end();
  } catch (error) {
    console.log(error);
    return res.status(400).end();
  }
}
