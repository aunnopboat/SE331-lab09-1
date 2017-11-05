package camt.cbsd.lab05.entity;

import com.fasterxml.jackson.annotation.JsonIgnoreProperties;
import lombok.*;

import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;

@Entity
@Data
@NoArgsConstructor
@AllArgsConstructor
@JsonIgnoreProperties(ignoreUnknown = true)
@Builder
public class Course {
    @Id
    @GeneratedValue(strategy= GenerationType.AUTO)

    long id;
    @NonNull
    String courseId;
    @NonNull
    String courseName;

}

