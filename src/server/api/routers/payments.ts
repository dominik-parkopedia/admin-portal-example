import { createTRPCRouter, publicProcedure } from "~/server/api/trpc";

export const paymentsRouter = createTRPCRouter({
  listPayments: publicProcedure.query(async ({ ctx }) => {
    const payments = await ctx.db.payment.findMany();

    return {
      payments,
    };
  }),
});
