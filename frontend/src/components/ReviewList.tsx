import React from "react";

interface Review {
  id: number;
  user_email: string;
  rating: number;
  comment: string;
  created_at: string;
}

interface Props {
  reviews: Review[];
}

export default function ReviewList({ reviews }: Props) {
  const latestReviews = [...reviews]
    .sort(
      (a, b) =>
        new Date(b.created_at).getTime() -
        new Date(a.created_at).getTime()
    )
    .slice(0, 6);

  return (
    <section>
      {/* Header */}
      <div className="flex items-center gap-2 mb-6">
        <span
          className="material-symbols-outlined text-xl text-yellow-500"
          style={{ fontVariationSettings: "'FILL' 1" }}
        >
          star
        </span>

        <h2 className="text-3xl font-bold">
          {reviews.length} Review{reviews.length !== 1 ? "s" : ""}
        </h2>
      </div>

      {latestReviews.length === 0 ? (
        <div className="text-gray-500 text-center py-8">
          No reviews yet.
        </div>
      ) : (
        <>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {latestReviews.map((review) => (
              <div
                key={review.id}
                className="border rounded-xl p-4 hover:shadow-md transition-all"
              >
                {/* Top */}
                <div className="flex items-start gap-3">
                  <div className="w-10 h-10 rounded-full bg-gray-100 flex items-center justify-center">
                    <span className="material-symbols-outlined text-lg">
                      person
                    </span>
                  </div>

                  <div className="flex-1">
                    <div className="flex justify-between items-center">
                      <h3 className="font-semibold text-sm">
                        {review.user_email}
                      </h3>

                      <span className="text-xs text-gray-500">
                        {new Date(
                          review.created_at
                        ).toLocaleDateString()}
                      </span>
                    </div>

                    {/* Rating */}
                    <div className="flex items-center gap-1 mt-1">
                      {Array.from({ length: 5 }).map((_, index) => (
                        <span
                          key={index}
                          className={`material-symbols-outlined text-sm ${
                            index < review.rating
                              ? "text-yellow-500"
                              : "text-gray-300"
                          }`}
                          style={{
                            fontVariationSettings: "'FILL' 1",
                          }}
                        >
                          star
                        </span>
                      ))}

                      <span className="text-xs text-gray-500 ml-1">
                        {review.rating}/5
                      </span>
                    </div>
                  </div>
                </div>

                {/* Comment */}
                <p className="mt-3 text-sm text-gray-700 leading-6">
                  {review.comment}
                </p>
              </div>
            ))}
          </div>

          {reviews.length > 6 && (
            <div className="flex justify-center mt-6">
              <button className="px-6 py-2 rounded-lg border border-gray-300 hover:bg-gray-100 transition">
                View All Reviews
              </button>
            </div>
          )}
        </>
      )}
    </section>
  );
}