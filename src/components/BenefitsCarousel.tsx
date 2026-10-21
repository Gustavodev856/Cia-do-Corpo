const benefits = [
    "Relaxe após o treino na nossa cadeira de massagem",
    "Treine com seu personal sem pagar taxa extrar",
    "Enquanto você treina, seu filho brinca na Cia Kids",
]

export default function BenefitsCarousel() {
    return(
        <section 
        aria-label="Benefícios da Academia Cia do Corpo"
        className="overflow-hidden border-y border-white/10 bg-zinc-950 py-5 text-white">

            <div className="flex w-max animate-benefits-scroll">
                {[...benefits, ...benefits].map((benefit, index) => (
                    <div key={`${benefit}-${index}`} className="flex shrink-0 items-center gap-5 px-6 md:gap-8 md:px-10">
                <span className="text-xl font-bold text-orange-500">
                    ✳
                </span>

                <p className="whitespace-nowrap text-sm font-semibold uppercase tracking-wide md:text-base">
                    {benefit}
                </p>

                <span className="text-orange-500">
                    ✦
                </span>

                    </div>
                ))}
                
            </div>
        </section>
    )
}