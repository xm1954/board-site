package portfolio.blog.board.dto.request;

import portfolio.blog.board.entity.Board;
import lombok.Builder;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

/**
 * -Request-
 * 게시글 등록 정보 요청, 작성자는 Authentication 받음
 */

@Getter
@Setter
@NoArgsConstructor
public class BoardWriteDto {

    private String title;
    private String content;

    public BoardWriteDto(String title, String content) {
        this.title = title;
        this.content = content;
    }

    @Builder
    public static Board ofEntity(BoardWriteDto dto) {
        if (dto == null) {
            throw new IllegalArgumentException("BoardWriteDto cannot be null");
        }
        return Board.builder()
                .title(dto.title)
                .content(dto.content)
                .build();
    }

}
